Everyone who use Elasticsearch engine as a part of a dynamic infrastructure as a log storage or as a main database are faced with problems during  autoscaling . In fact  common Load Balancers as [Nginx](http://nginx.org/)  used http balancing  between Elasticsearch node pool and  senders. But in this case it is possible to faced with many problems caused by service discovery during autoscaling or failed node exclusion . It is  mean that data nodes list may be inconsistent because node may be up and running but non-operational, overloaded or dropped/excluded from cluster. So simple healthchecks useless in this cases as well as simple service discovery.
Our proposition is usual - simplify everything as much as possible . 
Our goal - keep things  simple! So let`s do Elasticsearch input data and requests balancing.     



In this article we will use Elasticsearch [CAT node API](https://www.elastic.co/guide/en/elasticsearch/reference/current/cat-nodes.html) it is a part of powerfull [CAT](https://www.elastic.co/guide/en/elasticsearch/reference/current/cat.html)  api that is a header search mechanisms over Elasticsearch engine. We will use our lovely  gobetween to balance traffic between [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) (data) nodes  in Elasticsearch cluster for inserting/selecting  big amount of data and holding big request quantity especially in case of using autoscaling.

![](http://i.piccy.info/i9/22161abca6d14ba661194819805db8eb/1466846714/32781/1006107/elastic_gobetween.png)  

We need:
1) Client node  especially for  Gobetween . This node will be our request router for our data node discovery service. 
For this during adding client node to cluster add following to elasticsearch.conf

     node.master: false
     node.data: false 


2) discovery script

exec discovery will looks like :

     #!/bin/bash
     curl -sS -XGET 'http://PI_OF_YOUR_CLIENT_NODE:9200/_cat/nodes?v&h=ip,r=d' |sed '1d'|tr -d ' '|sed 's/$/:9200/'

it should have output like:
 
     10.0.0.51:9200
     10.0.0.55:9200
     10.0.0.53:9200
     10.0.0.52:9200
     10.0.0.54:9200
     etc ….


3) Let's configure Gobetween for balancing between data nodes . We will use exec discovery method and round robin algorithm . This is a simple use case and you feel free to use more complicated methods with weights and dynamically generated discovery lists.
But let`s start to balance :

After installation Gobetween described earlier  let`s configure it:

Our gobetween conf will looks like:

     [servers.sample3]
     bind = "100.100.1.5:9200"
     protocol = "tcp"
     balance = "weight"
     [servers.sample3.discovery]
     kind = "exec"
     exec_command = ["/etc/gobetween/discovery_elasticsearch.sh"] 
     interval="1m"
     timeout = "10s"                            

     [servers.sample3.healthcheck]
     fails = 1                      
     passes = 1
     interval = "2s"                
     kind = "exec"
     exec_command = "/etc/gobetween/healthcheck_elasticsearch.sh" 
     exec_expected_positive_output = "1"
     exec_expected_negative_output = "0"
     timeout = "1s"


Conclusion

In this examaple not shown weight balancing for data nodes.
You can write more complex script or use any Elasticsearch Analyzer mechanisms that allow you play with node weight depends on loads in them or it's free calculation capacity.