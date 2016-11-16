/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = "<p><img src=\"https://github.com/yyyar/gobetween/blob/master/logo.png?raw=true\" alt=\"\"></p>\n<p>Long time all of us used and using &quot;traditional&quot; load balancers / proxies like <a href=\"https://www.nginx.com/\">nginx</a>, <a href=\"http://www.haproxy.org/\">haproxy</a>, and others.</p>\n<p>But in modern world balancing become more end more flexible because of environment changes are made more often. Nodes behind load balancer are spawning and disappear according to load and/or other requirements. Auto scaling and containerization became almost a &quot;silver bullet&quot; in modern IT infrastructure architectures.</p>\n<p>In the IP-telephony world DNS SRV records are main mechanism to find out nearest and less loaded call router.</p>\n<p>Same situation is in modern microservices world, but unfortunately, there are almost no lb / proxy that have flexible and complete <em>automatic discovery</em> feature. There are lot&#39;s of tricks and workarounds like <a href=\"https://www.airpair.com/scalable-architecture-with-docker-consul-and-nginx\">this</a>.</p>\n<p><strong>gobetween</strong> aiming fill this gap and provide fast, flexible and full-featured solution for load balancing for modern microservice architectures.  </p>\n";

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = "<ul>\n<li><a href=\"Introduction\">Introduction</a></li>\n<li><a href=\"Installation\">Installation</a></li>\n<li><a href=\"Configuration\">Configuration</a><ul>\n<li><a href=\"Balancing\">Balancing</a></li>\n<li><a href=\"Discovery\">Discovery</a></li>\n<li><a href=\"Healthchecks\">Healthchecks</a></li>\n<li><a href=\"Access-Control\">Access Control</a></li>\n<li><a href=\"TLS-Termination\">TLS Termination</a></li>\n<li><a href=\"Windows-specific-notes\">Windows specific notes</a></li>\n</ul>\n</li>\n<li>Use Cases<ul>\n<li><a href=\"Static-balancing\">Simple load balancing</a></li>\n<li><a href=\"SRV-Balancing\">SRV balancing</a></li>\n<li><a href=\"Docker---Swarm-Balancing\">Docker / Swarm balancing</a></li>\n<li><a href=\"ElasticSearch-cluster-with-Exec-discovery\">ElasticSearch cluster with Exec discovery</a></li>\n<li><a href=\"Service-balancing-with-Consul-discovery-and-Docker-Registrator\">Service balancing with Consul discovery and Docker Registrator</a></li>\n</ul>\n</li>\n<li><a href=\"REST-API\">REST API</a></li>\n<li><a href=\"Performance-tests\">Performance tests</a></li>\n</ul>\n";

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = "<p><em><strong>(since 0.3.0)</strong></em></p>\n<p>Access control support all subnets from IPv6 and IPv4 pool.</p>\n<p>To enable access control need to add  [servers.servername.access] section into config file or add it via <a href=\"https://github.com/yyyar/gobetween/wiki/REST-API\">REST API</a></p>\n<p>###Policy</p>\n<p>Access control section can be defined with or without default policy : </p>\n<pre><code>default = &quot;deny&quot; | &quot;allow&quot;\n</code></pre><p>Allow policy is mean that all traffic pass to selected server .\nDeny policy is opposite and reject all traffic point to selected servers.</p>\n<p>###Rules</p>\n<p>Rules section needs to be defined to list rules applied over default policy.\nRules are checking from top and down the list. First rule match meant check stops and rule apply.</p>\n<pre><code>rules = [\n    &quot;allow 127.0.0.1&quot;,\n    &quot;deny 192.168.1.0/24&quot;,\n    &quot;allow 192.168.0.0/16&quot;,\n    &quot;allow 10.0.0.0/16&quot;,\n   ]\n</code></pre><p>In shown case  packets came from 192.168.1.0/24 will be rejected despite the fact that they are included in the subset of subnets listed in next line 192.168.0.0/16. All other packets from 192.168.0.0/16 subnet will be passed .</p>\n<p>full example:</p>\n<pre><code class=\"lang-toml\">[servers.servername.access]\ndefault = &quot;deny&quot;\nrules = [\n    &quot;allow 127.0.0.1&quot;,\n    &quot;deny 192.168.1.0/24&quot;,\n    &quot;allow 192.168.0.0/16&quot;,\n    &quot;allow 10.0.0.0/16&quot;,\n   ]\n</code></pre>\n";

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = "<p>Balancing strategy is a way <em>gobetween</em> select backends (from discovery backends pool)  for new client connection. It&#39;s defined in <code>balance</code> property within <code>[servers.&lt;name&gt;]</code>, and is <code>weight</code> by default.</p>\n<h5 id=\"-weight-\"><code>weight</code></h5>\n<p>Select backend from discovery pool with probability based on backends weights.\nFor example, for backends pool:</p>\n<pre><code class=\"lang-json\">[\n    &quot;host1 weight=1&quot;\n    &quot;host2 weight=2&quot;\n]\n</code></pre>\n<p>host1 will be selected with probability 75%, and host2 will be selected in 25% cases.</p>\n<p>If weight for all backends are the same, backend will be selected randomly.</p>\n<h5 id=\"-iphash-\"><code>iphash</code></h5>\n<p>Target backend will be calculated using hash function of client ip address mod backends count. Note if backends pool changes (for example, due discovery), client may be proxied to a different backend.</p>\n<h5 id=\"-leastconn-\"><code>leastconn</code></h5>\n<p><em>gobetween</em> will select backends with least connections to it.</p>\n<h5 id=\"-roundrobin-\"><code>roundrobin</code></h5>\n<p>It&#39;s most simple balancing strategy, and each new connection will be proxies to next backend in the backends pool successively.</p>\n<h5 id=\"-leastbandwidth-\"><code>leastbandwidth</code></h5>\n<p><em>(since 0.3.0)</em>\nBackends with least sum of rx/tx per second traffic will be selected for next request. Note that rx/tx per second values are calculated with 2 seconds interval so changes in bandwidth won&#39;t be instantly applied.</p>\n";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "<h2 id=\"configuration-location\">Configuration location</h2>\n<p><em>(since v0.3.0)</em></p>\n<p>There are several options where gobetween could pull it&#39;s configuration on startup.</p>\n<h3 id=\"file\">file</h3>\n<p><code>$ gobetween from-file /path/to/gobetween.toml</code></p>\n<h3 id=\"http\">http</h3>\n<p><code>$ gobetween from-url http://some.url/gobetween.toml</code></p>\n<h3 id=\"consul-kv\">consul kv</h3>\n<p><code>$ gobetween from-consul localhost:8500 --key=gobetween --scheme=http -f json</code></p>\n<h2 id=\"configuration-format\">Configuration format</h2>\n<p>gobetween could be configured with TOML or JSON (these formats map 1-to-1 to each other).\nYou can specify format with --format (-f) option, for exaple:</p>\n<p><code>$ gobetween from-url http://some.url/gobetween.toml -f toml</code></p>\n<p><code>$ gobetween from-url http://some.url/gobetween.json -f json</code></p>\n<h2 id=\"passing-arguments-in-env-variable\">Passing arguments in ENV variable</h2>\n<p>It&#39;s possible to pass command-line args via GOBETWEEN environment variable (containing json array of arguments) instead as typical args. It may be useful for containerization when you store application parameters in env and don&#39;t want to change command line.</p>\n<p>So instead</p>\n<p><code>$ gobetween from-url http://some.url/gobetween.toml -f toml</code></p>\n<p>You can use the following syntax:</p>\n<pre><code>$ GOBETWEEN=&#39;[&quot;from-url&quot;, &quot;http://some.url/gobetween.toml&quot;, &quot;-f&quot;, &quot;toml&quot;]&#39;\n$ gobetween\n</code></pre>";

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = "<p>Service discovery solves the problem of automatic determining locations of service instances. There are two major types of service discovery: client-side discovery and server-side discovery. <em>gobetween</em> has build-in <a href=\"http://microservices.io/patterns/server-side-discovery.html\">server-side discovery</a> and acts as a router that can have static configuration, or query different kinds of &quot;service registries&quot;, depending on how it&#39;s configured.</p>\n<p>Currently <em>gobetween</em> supports the following discovery types used for building backends pool for the server:</p>\n<ul>\n<li><a href=\"#static\">static</a></li>\n<li><a href=\"#src\">srv</a></li>\n<li><a href=\"#docker\">docker</a></li>\n<li><a href=\"#json\">json</a></li>\n<li><a href=\"#plaintext\">plaintext</a></li>\n<li><a href=\"#exec\">exec</a></li>\n<li><a href=\"#consul\">consul</a></li>\n</ul>\n<p>Discovery is defined in <code>[servers.&lt;name&gt;.discovery]</code> section in <code>kind</code> property.</p>\n<p>There are some common properties for each discovery type (expect static):</p>\n<pre><code class=\"lang-toml\">kind = &quot;&lt;kind&gt;&quot;         # (required)\nfailpolicy = &quot;keeplast&quot; # (optional) &quot;keeplast&quot; | &quot;setempty&quot; - what to do with backends if discovery fails\ninterval = &quot;0s&quot;         # (required) backends cache invalidation interval; 0 means never.\ntimeout = &quot;5s&quot;          # (optional) max time to wait for discover until falling to failpolicy\n</code></pre>\n<h3 id=\"static\">static</h3>\n<p>It&#39;s a simplest way to build load balancer backends. In this case actually no discovery is happened and backends list are static and managed only by health checks. <code>static_list</code> can contain as many backends as needed.</p>\n<p><img src=\"http://i.piccy.info/i9/4f0b4f9b1a5ba56b6a0559a17d611c5b/1465913152/19993/1043487/simple.png\" alt=\"\"></p>\n<pre><code class=\"lang-toml\">[servers.example]\n\n# ...\n\n  [servers.example.discovery]\n  kind = &quot;static&quot;\n  static_list = [\n    &quot;localhost:8000 weight=5&quot;,  # &quot;host:port weight=N priority=M&quot;, weight and priority are optional\n    &quot;localhost:8001&quot;            # and = 1 by default\n  ]\n</code></pre>\n<h3 id=\"srv\">srv</h3>\n<p>This discovery method uses DNS lookup to build backends list. gobetween will query DNS server defined in <code>srv_lookup_server</code> property and filter services using pattern defined in <code>srv_lookup_server</code>. You can use any custom DNS server or <a href=\"https://www.consul.io/docs/agent/dns.html\">Consul DNS</a>.</p>\n<p><img src=\"http://i.piccy.info/i9/c1ab436d6c65f957c29ff26d3ca7cc17/1465913811/28400/1043487/srv.png\" alt=\"\"></p>\n<pre><code class=\"lang-toml\">[servers.example]\n\n# ...\n\n  [servers.example.discovery]\n  kind = &quot;srv&quot;\n  srv_lookup_server = &quot;some.server:53&quot;\n  srv_lookup_pattern = &quot;some.service.&quot;\n  srv_dns_protocol = &quot;udp&quot;  # (since v0.2.0) - protocol to use for dns lookup: udp | tcp\n</code></pre>\n<h3 id=\"docker\">docker</h3>\n<p>Docker discovery can work both with stand-alone <a href=\"http://docker.com\">Docker</a> server or with <a href=\"https://docs.docker.com/swarm/\">Docker Swarm</a>. <em>gobetween</em> will call Docker / Swarm API endpoint defined in <code>docker_endpoint</code> to build backends list. It may be HTTP endpoint (like <code>http://0.0.0.0:2375</code>) or Unix socket (<code>unix:///var/run/docker.sock</code>). To select only needed containers you can set <code>docker_container_label</code> property and containers will be filtered based on provided <a href=\"https://docs.docker.com/engine/userguide/labels-custom-metadata/#container-labels\">container label</a> and label value. You should also set <code>docker_container_private_port</code> so gobetween will use corresponding container public port while adding it to backends list.</p>\n<p><img src=\"http://i.piccy.info/i9/7de5f9db763a40849bb885d34a4fdeaa/1465914526/71950/1043487/docker.png\" alt=\"\"></p>\n<pre><code class=\"lang-toml\">[servers.example]\n\n# ...\n\n  [servers.example.discovery]\n  kind = &quot;docker&quot;\n  docker_endpoint = &quot;http://localhost:2375&quot; # (required) Endpoint to docker API\n  docker_container_label = &quot;proxied=true&quot;   # (optional) Label to filter containers\n  docker_container_private_port = 80        # (required) Private port of container to use\n  docker_container_host_env_var = &quot;&quot;        # (optional) (since v0.2.0) Take container host from container env variable\n</code></pre>\n<h3 id=\"json\">json</h3>\n<p>JSON discovery is useful for custom setups when you have your own service registry implementation that can provide backends list in JSON format. <em>gobetween</em> will make HTTP query to <code>json_endpoint</code>, expecting valid JSON in response, parse it and build backends list. By defaults JSON should have the following format:</p>\n<pre><code class=\"lang-js\">[ \n  {&quot;host&quot;: &quot;0.0.0.0&quot;, &quot;port&quot;: &quot;1231&quot;, &quot;weight&quot;: 1, &quot;priority&quot;: 1},\n  {&quot;host&quot;: &quot;1.1.1.1&quot;, &quot;port&quot;: &quot;1232&quot;, &quot;weight&quot;: 2, &quot;priority&quot;: 1},\n  ...\n]\n</code></pre>\n<p>But it may be overridden to fit your custom JSON structure.</p>\n<pre><code class=\"lang-toml\">[servers.example]\n\n# ...\n\n  [servers.example.discovery]\n  kind = &quot;json&quot;\n  json_endpoint = &quot;http://localhost:8080&quot;  # (required) JSON discovery Url\n  json_host_pattern = &quot;some.level.host&quot;    # (optional) path to host value in JSON object, by default &quot;host&quot;\n  json_port_pattern = &quot;some.level.port&quot;    # (optional) path to port value in JSON object, by default &quot;port&quot;\n  json_weight_pattern = &quot;some.level.weight&quot; # (optional) path to weight in JSON object, by default &quot;weight&quot;\n  json_priority_pattern = &quot;some.level.priority&quot; # (optional) path to priority in JSON object, by default &quot;priority&quot;\n</code></pre>\n<h3 id=\"plaintext\">plaintext</h3>\n<p>This is even simpler way to integrate custom discovery registries. Line in json discovery, <em>gobetween</em> will query <code>plaintext_endpoint</code> to get newline separated list of nodes in plain text format. Then it will be parsed using regexps line-by-line (one backend in line).A ll necessary values like host, port, etc will captured from named regexp groups. By default regexp plain discovery use </p>\n<pre><code class=\"lang-regex\">(?P&lt;host&gt;\\S+):(?P&lt;port&gt;\\d+)(\\sweight=(?P&lt;weight&gt;\\d+))?(\\spriority=(?P&lt;priority&gt;\\d+))\n</code></pre>\n<p>So you can use parse the following responses by default: </p>\n<pre><code>0.0.0.0:1234 weight=0, priority=1\n0.0.0.0:4321 weight=1 priority=0\n</code></pre><p>You can override regexp used to capture values using <code>plaintext_regex_pattern</code> property, keeping in mind groups names:</p>\n<ul>\n<li><code>(?P&lt;host&gt;...)</code></li>\n<li><code>(?P&lt;port&gt;...)</code></li>\n<li><code>(?P&lt;weight&gt;...)</code></li>\n<li><code>(?P&lt;priority&gt;...)</code></li>\n</ul>\n<p>All another captured groups will be ignored. </p>\n<pre><code class=\"lang-toml\">[servers.example]\n\n# ...\n\n  [servers.example.discovery]\n  kind = &quot;plaintext&quot;\n  plaintext_endpoint = &quot;http://some.url.com&quot;   # (required) Url to plain text discovery\n  plaintext_regex_pattern = &quot;&quot;                 # (optional) Regex with named capturing groups\n</code></pre>\n<h3 id=\"exec\">exec</h3>\n<p>This is most powerful discovery method. In this case backends list will be parser from the stdout of arbitrary script / program. <em>gobetween</em> will execute <code>exec_command</code> (first element is full path to the program, all others are optional arguments. Expected output of the script should be in the following format:</p>\n<pre><code>host1:port1 weight=N\nhost2:port2 weight=M\n</code></pre><p>Weight is optional. Lines should be separated by newline (\\n). </p>\n<p>Here is an example of script <code>/path/to/script.sh</code>:</p>\n<pre><code class=\"lang-bash\">#!/usr/bin/env bash\n\necho localhost:8000 weight=1\necho localhost:8001 weight=2\n</code></pre>\n<p><em>gobetween</em> process should have execute permission to the script.</p>\n<pre><code class=\"lang-toml\">[servers.example]\n\n# ...\n\n  [servers.example.discovery]\n  kind = &quot;exec&quot;\n  exec_command = [&quot;/path/to/script.sh&quot;, &quot;arg1&quot;, &quot;arg2&quot;] # (required) command to exec and variable-length arguments\n</code></pre>\n<h3 id=\"consul\">consul</h3>\n<p><em>(since v0.3.0)</em>\nConsul discovery uses Consul API to retrieve list of backends. If you&#39;re relying on Consul healthchecks and using <code>consul_service_passing_only = true</code> if makes sense to turn off gobetween healthchecks.</p>\n<pre><code class=\"lang-toml\">[servers.example]\n\n# ...\n\n  [servers.example.discovery]\n  consul_host = &quot;localhost:8500&quot;       # (required) Consul host:port\n  consul_service_name = &quot;myservice&quot;    # (required) Service name\n  consul_service_tag = &quot;&quot;              # (optional) Service tag\n  consul_service_passing_only = true   # (optional) Get only services with passing healthchecks\n\n  consul_tls_enabled = false                    # (optional) enable client tls auth\n  consul_tls_cert_path = &quot;/path/to/cert.pem&quot;\n  consul_tls_key_path = &quot;/path/to/key.pem&quot;\n  consul_tls_cacert_path = &quot;/path/to/cacert.pem&quot;\n</code></pre>\n";

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = "<p>Docker containers direct discovery is simple with gobetween . Simply run containers with selected label (you may separate containers with same internal port , but with different service type by different labels)</p>\n<p><img src=\"http://i.piccy.info/i9/7de5f9db763a40849bb885d34a4fdeaa/1465914526/71950/1043487/docker.png\" alt=\"\"></p>\n<p>In this article we will discover services and  balance docker containers directly with docker(or swarm) API.\nFor this we need to define discovery  type as  “Docker”.  Also need to define docker host(ip) and port or swarm manage host(ip) and port . Service discovery in this cases works via containers labels. In this cases label will be &quot;api=true&quot; . All containers  from swarm cluster( or from docker host) marked with this label  will be balanced by gobetween. In balancing pool will be added all containers that are in “active” state and marked with defined label. Also it takes only containers with selected in “docker_container_private_port”  internal port enabled.</p>\n<p>Also in this example  we will use more complicated healthcheck. It named exec . Main idea - you know what you need to check , you may write your own script , gobetween send IP(arg1) and port(arg2) of node that need to be checked in this way : script.sh arg1 arg2  and it should return 1 if success and 0 if fail in stdout. In exec_timeout_duration variable you need to specify script max execution time. If during this time script does not return expected output check marked as failed. </p>\n<p><strong>IMPORTANT</strong> “timeout”  value should be less then check “interval” value.</p>\n<pre><code class=\"lang-toml\">[servers.sample3]\nbind = &quot;localhost:3002&quot;\nprotocol = &quot;tcp&quot;\nbalance = &quot;weight&quot;\n\n  [servers.sample3.discovery]\n    interval = &quot;10s&quot;\n    timeout = &quot;2s&quot;\n    kind = &quot;docker&quot;\n    docker_endpoint = &quot;http://localhost:2375&quot;  # Docker / Swarm API    \n    docker_container_label = &quot;api=true&quot;  # label to filter containers\n    docker_container_private_port = 80   # gobetween will take public container port for this private port\n\n  [servers.sample3.healthcheck]\n    fails = 1                      \n    passes = 1\n    interval = &quot;2s&quot;   \n    timeout = &quot;1s&quot;             \n    kind = &quot;ping&quot;\n</code></pre>\n";

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = "<p>Everyone who use Elasticsearch engine as a part of a dynamic infrastructure as a log storage or as a main database are faced with problems during  autoscaling . In fact  common Load Balancers as <a href=\"http://nginx.org/\">Nginx</a>  used http balancing  between Elasticsearch node pool and  senders. But in this case it is possible to faced with many problems caused by service discovery during autoscaling or failed node exclusion . It is  mean that data nodes list may be inconsistent because node may be up and running but non-operational, overloaded or dropped/excluded from cluster. So simple healthchecks useless in this cases as well as simple service discovery.\nOur proposition is usual - simplify everything as much as possible . \nOur goal - keep things  simple! So let`s do Elasticsearch input data and requests balancing.     </p>\n<p>In this article we will use Elasticsearch <a href=\"https://www.elastic.co/guide/en/elasticsearch/reference/current/cat-nodes.html\">CAT node API</a> it is a part of powerfull <a href=\"https://www.elastic.co/guide/en/elasticsearch/reference/current/cat.html\">CAT</a>  api that is a header search mechanisms over Elasticsearch engine. We will use our lovely  gobetween to balance traffic between <a href=\"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete\">CRUD</a> (data) nodes  in Elasticsearch cluster for inserting/selecting  big amount of data and holding big request quantity especially in case of using autoscaling.</p>\n<p><img src=\"http://i.piccy.info/i9/22161abca6d14ba661194819805db8eb/1466846714/32781/1006107/elastic_gobetween.png\" alt=\"\">  </p>\n<p>We need:\n1) Client node  especially for  Gobetween . This node will be our request router for our data node discovery service. \nFor this during adding client node to cluster add following to elasticsearch.conf</p>\n<pre><code> node.master: false\n node.data: false \n</code></pre><p>2) discovery script</p>\n<p>exec discovery will looks like :</p>\n<pre><code> #!/bin/bash\n curl -sS -XGET &#39;http://PI_OF_YOUR_CLIENT_NODE:9200/_cat/nodes?v&amp;h=ip,r=d&#39; |sed &#39;1d&#39;|tr -d &#39; &#39;|sed &#39;s/$/:9200/&#39;\n</code></pre><p>it should have output like:</p>\n<pre><code> 10.0.0.51:9200\n 10.0.0.55:9200\n 10.0.0.53:9200\n 10.0.0.52:9200\n 10.0.0.54:9200\n etc ….\n</code></pre><p>3) Let&#39;s configure Gobetween for balancing between data nodes . We will use exec discovery method and round robin algorithm . This is a simple use case and you feel free to use more complicated methods with weights and dynamically generated discovery lists.\nBut let`s start to balance :</p>\n<p>After installation Gobetween described earlier  let`s configure it:</p>\n<p>Our gobetween conf will looks like:</p>\n<pre><code> [servers.sample3]\n bind = &quot;100.100.1.5:9200&quot;\n protocol = &quot;tcp&quot;\n balance = &quot;weight&quot;\n [servers.sample3.discovery]\n kind = &quot;exec&quot;\n exec_command = [&quot;/etc/gobetween/discovery_elasticsearch.sh&quot;] \n interval=&quot;1m&quot;\n timeout = &quot;10s&quot;                            \n\n [servers.sample3.healthcheck]\n fails = 1                      \n passes = 1\n interval = &quot;2s&quot;                \n kind = &quot;exec&quot;\n exec_command = &quot;/etc/gobetween/healthcheck_elasticsearch.sh&quot; \n exec_expected_positive_output = &quot;1&quot;\n exec_expected_negative_output = &quot;0&quot;\n timeout = &quot;1s&quot;\n</code></pre><p>Conclusion</p>\n<p>In this examaple not shown weight balancing for data nodes.\nYou can write more complex script or use any Elasticsearch Analyzer mechanisms that allow you play with node weight depends on loads in them or it&#39;s free calculation capacity.</p>\n";

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = "<p>Healthchecks are used for determine service status of backend nodes pool.\nIf discovery return only a nodes list and there are no healthchecks on discovery service side it needs to use\nmechanism to determine service real status (failed or ok ). In this case healthchecks can be used.\nThere are two different type of healthchecks in gobetween.</p>\n<p><strong>Healthchecks are optional since 0.2 release.</strong> </p>\n<p>If there are no healthcheck server section defined - backend nodes marked as &quot;ok&quot; and can be deleted from backend according to discovery rules  and intervals</p>\n<h3 id=\"ping\">ping</h3>\n<p>This is a simple healthcheck. It is simple sheck connection to backend nodes by initiate new connection from gobetween side to each backend node from discovery list. In case of  connection created successfully - check passed. This is a simple mechanism. Checks success are  only  mean that connection created . No data verification made during this checks.</p>\n<p>Example of ping healthcheck:</p>\n<pre><code class=\"lang-toml\">[servers.default.healthcheck]\nkind = &quot;ping&quot;\ninterval = &quot;2s&quot;\nping_timeout_duration = &quot;500ms&quot;\n</code></pre>\n<h3 id=\"exec\">exec</h3>\n<p>This is a more complicated healthcheck type. During Gobetween development we made a decision provide users a flexible mechanism to create own healthchecks. No one except end user know how exactly check service status of nodes in discovery pools. There are uncountable quantity of usage cases and services. Anyone can create it&#39;s own script and call it as healthcheck. Script execute by gobetween with arguments: <code>/path/to/script [ip] [port]</code> output of script to stdout should be <code>1</code> if check passed successfully and <code>0</code> if failed by default (may be overriden).  </p>\n<p>Example of exec healthcheck:</p>\n<pre><code class=\"lang-toml\">[servers.default.healthcheck] \nkind = &quot;exec&quot;\ninterval = &quot;2s&quot;  \nexec_command = &quot;/usr/share/exec_healthcheck.sh&quot;  # (required) command to execute\nexec_expected_positive_output = &quot;1&quot;           # (required) expected output of command in case of success\nexec_expected_negative_output = &quot;0&quot;           # (required) expected output of command in case of failure\nexec_timeout_duration = &quot;1s&quot;                  # (required) max time for script to execute until mark as failed\n</code></pre>\n<h3 id=\"examples\">Examples</h3>\n<p>Please note that in all operating systems healthcheck response should not contain newline after output result.</p>\n<h4 id=\"windows\">Windows</h4>\n<p>healthcheck.bat</p>\n<pre><code>@ECHO OFF\necho|set /p Dummy=1\n</code></pre><h4 id=\"linux-actually-any-unix-family-\">Linux (Actually any Unix family)</h4>\n<p>healthcheck.sh</p>\n<pre><code class=\"lang-bash\">#!/usr/bin/env bash\necho -n 1 ;\n</code></pre>\n";

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = "<p><strong>For latest docs please refer to links in the sidebar on the right</strong></p>\n<h2 id=\"architecture\">Architecture</h2>\n<p><img src=\"http://i.piccy.info/i9/8b92154435be32f21eaa3ff7b3dc6d1c/1466244332/74457/1043487/gog.png\" alt=\"gobetween\" /></p>\n";

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = "<ul>\n<li><a href=\"#linux-binary\">Linux Binary</a></li>\n<li><a href=\"#linux-from-sources\">Linux From Sources</a></li>\n<li><a href=\"#docker\">Docker</a></li>\n<li><a href=\"#windows-binary\">Windows Binary</a></li>\n</ul>\n<h2 id=\"linux-binary\">Linux Binary</h2>\n<h3 id=\"download-latest-version\">Download latest version</h3>\n<h4 id=\"for-x86\">for x86</h4>\n<pre><code class=\"lang-bash\">$ curl -s https://api.github.com/repos/yyyar/gobetween/releases | grep browser_download_url | grep linux_386 | cut -d &#39;&quot;&#39; -f 4 | wget -i -\n</code></pre>\n<h4 id=\"for-amd64\">for amd64</h4>\n<pre><code class=\"lang-bash\">$ curl -s https://api.github.com/repos/yyyar/gobetween/releases | grep browser_download_url | grep linux_amd64 | cut -d &#39;&quot;&#39; -f 4 | wget -i -\n</code></pre>\n<h3 id=\"unzip\">Unzip</h3>\n<pre><code class=\"lang-bash\">$ tar -zxvf *.tar.gz\n$ cd gobetween*\n</code></pre>\n<h3 id=\"configure\">Configure</h3>\n<pre><code class=\"lang-bash\">vim config/gobetween.toml\n</code></pre>\n<h3 id=\"run\">Run</h3>\n<pre><code class=\"lang-bash\">$ sudo gobetween -c config/gobetween.toml\n</code></pre>\n<h2 id=\"linux-from-sources\">Linux from sources</h2>\n<h3 id=\"install\">Install</h3>\n<pre><code class=\"lang-bash\">$ git clone git@github.com:yyyar/gobetween.git\n$ make\n$ sudo -E make install\n$ vim /etc/gobetween.toml\n$ gobetween -c /etc/gobetween.toml\n</code></pre>\n<h3 id=\"uninstall\">Uninstall</h3>\n<pre><code class=\"lang-bash\">sudo make uninstall\n</code></pre>\n<h2 id=\"docker\">Docker</h2>\n<p>Pull image from public Docker Hub</p>\n<pre><code class=\"lang-bash\">$ docker pull yyyar/gobetween\n</code></pre>\n<p>Specify port mappings (80 docker host port to 80 container port ) and place <code>gobetween.toml</code> to <code>/path/to/gobetween.toml</code></p>\n<pre><code class=\"lang-bash\">$ docker run -p 80:80 -v /path/to/conf/gobetween.toml:/etc/gobetween/conf/:rw yyyar/gobetween\n</code></pre>\n<h2 id=\"windows-binary\">Windows Binary</h2>\n<pre><code>c:\\path\\to\\gobetween -c c:\\path\\to\\gobetween.toml\n</code></pre>";

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = "<p><img src=\"http://i.piccy.info/i9/c80788698d935682172e3d54a39b1a3d/1465302438/18505/1041433/10_MIN_test.png\" alt=\"\"></p>\n<p><img src=\"http://i.piccy.info/i9/885ae1fb49e098db523dac844bb14444/1465302487/18985/1041433/10_min_traffic_values.png\" alt=\"\"></p>\n<p>Test environment :</p>\n<pre><code>      8 core 16 thread Intel(R) Xeon(R) CPU  L5630  @ 2.13GHz\n</code></pre><p>Test tool : <a href=\"https://github.com/wg/wrk\">WRK</a></p>\n<p>Test rperformed with command:</p>\n<pre><code>wrk -c10000 -d600 -t8 http://$IP:80/index.html\n</code></pre><p>As a backends we using 3 docker containers with Nginx with static page.</p>\n<pre><code> user  nginx;\n worker_processes  4;\n error_log  /var/log/nginx/error.log warn;\n pid        /var/run/nginx.pid;\n events {\n worker_connections  4096;\n }\n http {\n include       /etc/nginx/mime.types;\n default_type  application/octet-stream;\n log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;\n                 &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;\n                 &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;; \n access_log  /var/log/nginx/access.log  main; \n sendfile        on;\n keepalive_timeout  65;\n include /etc/nginx/conf.d/*.conf;\n }\n</code></pre><p>Testing was done with Gobetween  ,  Haproxy  1.6 and Nginx 1.11.1 \nGobetween config :</p>\n<pre><code>[logging]\nlevel = &quot;info&quot; \noutput = &quot;stdout&quot; \n[globals]\n[defaults] \nmax_connections = 0\nclient_idle_timeout = &quot;30s&quot;\nbackend_idle_timeout = &quot;30s&quot;\nbackend_connection_timeout = &quot;30s&quot;\n[servers]\n\n[servers.sample3]\nbind = «$ip:80&quot;\nprotocol = &quot;tcp&quot;\nbalance = &quot;weight&quot;\n[servers.sample3.healthcheck]\ntimeout = &quot;5s&quot;\nkind = &quot;exec&quot;\ninterval = &quot;7s&quot;\nexec_command = &quot;./exec_healthcheck.sh&quot;\nexec_expected_positive_output = &quot;1&quot;\nexec_expected_negative_output = &quot;0&quot;\nexec_expected_output = &quot;1&quot;\nexec_timeout_duration = &quot;2s&quot;\n\n[servers.sample3.discovery]\nkind = &quot;docker&quot;\ndocker_endpoint = &quot;http://127.0.0.1:2375&quot;\ndocker_container_label = &quot;proxied=true&quot;\ndocker_container_private_port = 80\ndocker_cache_ttl = &quot;20s&quot;\n</code></pre><p>HAPROXY Config :</p>\n<pre><code>global\nlog 127.0.0.1 local0 notice\nmaxconn 200000\nuser haproxy\ngroup haproxy\ndefaults\nlog     global\nmode    http\noption  httplog\noption  dontlognull\nretries 3\noption redispatch\ntimeout connect  5000\ntimeout client  10000\ntimeout server  10000\n\nlisten appname $ip:80\nmaxconn 200000\nmode http\nstats enable\nstats uri /haproxy?stats\nstats realm Strictly\\ Private\nstats auth A_Username:YourPassword\nstats auth Another_User:passwd\nbalance roundrobin\noption httpclose\noption forwardfor\nserver lamp1 172.17.0.2:80 check\nserver lamp2 172.17.0.3:80 check\nserver lamp3 172.17.0.4:80 check\n</code></pre><p>Nginx LB config</p>\n<pre><code>user nginx nginx;\nworker_processes 8;\nerror_log /var/log/nginx/error_log info;\nevents {\nworker_connections 4096;\nuse epoll;\n}\nstream {\nupstream backend {\nserver 172.17.0.2:80 weight=1;\nserver 172.17.0.3:80 weight=5;\nserver 172.17.0.4:80 weight=5;\n}\nserver {\nlisten 82;\nproxy_pass backend;\n}\n}\n</code></pre>";

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = "<h3 id=\"table-of-contents\">Table of Contents</h3>\n<ul>\n<li><a href=\"#introduction\">Configuration</a></li>\n<li><a href=\"#errors\">Errors</a></li>\n<li><a href=\"#general\">General endpoints</a></li>\n<li><a href=\"#servers\">Servers endpoints</a></li>\n</ul>\n<h3 id=\"configuration\">Configuration</h3>\n<p>You can enable/disable and configure REST API port in gobetween config file in <code>[api]</code> section:</p>\n<pre><code class=\"lang-toml\">[api]\nenabled = true  # true | false\nbind = &quot;:8888&quot;  # bind host:port\n\n  # uncomment to enable \n  #[api.basic_auth]   # (optional) Enable HTTP Basic Auth\n  #login = &quot;admin&quot;    # HTTP Auth Login\n  #password = &quot;1111&quot;  # HTTP Auth Password\n\n  # uncomment to enable\n  #[api.tls]                        # (optional) Enable HTTPS\n  #cert_path = &quot;/path/to/cert.pem&quot;  # Path to certificate\n  #key_path = &quot;/path/to/key.pem&quot;    # Path to key\n</code></pre>\n<h3 id=\"errors\">Errors</h3>\n<p>API responds with typical HTTP codes representing success of failure of the operation:</p>\n<ul>\n<li>200 OK</li>\n<li>400 Bad Request</li>\n<li>409 Conflict</li>\n<li>500 Internal Server Error</li>\n</ul>\n<h2 id=\"rest-api-specification\">REST API Specification</h2>\n<h3 id=\"general\">General</h3>\n<h4 id=\"-get-system-information\"><code>GET /</code> - System Information</h4>\n<p>Returns system information about gobetween process.</p>\n<h5 id=\"response\">Response</h5>\n<pre><code class=\"lang-js\">{\n    &quot;configuration&quot;: {\n        &quot;kind&quot; : String\n        // ...\n        // kind-specific data\n    },\n    &quot;pid&quot;: Integer,\n    &quot;startTime&quot;: String,\n    &quot;time&quot;: String,\n    &quot;uptime&quot;: Duration,\n    &quot;version&quot;: String\n}\n</code></pre>\n<h4 id=\"-get-dump-dump-current-config-to-response\"><code>GET /dump</code> - Dump Current Config to Response</h4>\n<h5 id=\"query-params\">Query Params</h5>\n<ul>\n<li>format - &quot;toml&quot; (default) | &quot;json&quot;</li>\n</ul>\n<h5 id=\"response\">Response</h5>\n<pre><code> # TOML or JSON formatted current config\n</code></pre><h3 id=\"servers\">Servers</h3>\n<h4 id=\"-get-servers-name-get-server-by-name\"><code>GET /servers/&lt;name&gt;</code> - Get Server By Name</h4>\n<h5 id=\"response\">Response</h5>\n<pre><code class=\"lang-js\">{\n   // server definition of the same structure and format as `[servers.&lt;name&gt;]` \n   // entry in config TOML file but JSON encoded.\n}\n</code></pre>\n<h4 id=\"-get-servers-list-all-servers\"><code>GET /servers</code> - List All Servers</h4>\n<h5 id=\"response\">Response</h5>\n<pre><code class=\"lang-js\">{\n    // Represents the same structure and format as `[servers]` entries in config TOML file.\n\n    &quot;&lt;name&gt;&quot;: {\n        // server definition of the same structure and format as `[servers.&lt;name&gt;]` \n        // entry in config TOML file but JSON encoded.\n    },\n\n    // other servers\n\n}\n</code></pre>\n<h4 id=\"-post-servers-name-create-server-with-name-name-\"><code>POST /servers/&lt;name&gt;</code> - Create Server With Name <code>&lt;name&gt;</code></h4>\n<h5 id=\"body\">Body</h5>\n<pre><code class=\"lang-js\">{\n   // server definition of the same structure and format as `[servers.&lt;name&gt;]` \n   // entry in config TOML file but JSON encoded.\n}\n</code></pre>\n<h4 id=\"-delete-servers-name-delete-server\"><code>DELETE /servers/&lt;name&gt;</code> - Delete Server</h4>\n<h4 id=\"-get-servers-name-stats-get-server-statistics\"><code>GET /servers/&lt;name&gt;/stats</code> - Get Server Statistics</h4>\n<h5 id=\"body\">Body</h5>\n<pre><code class=\"lang-js\">{\n    &quot;active_connections&quot;: Integer,\n    &quot;rx_total&quot;: Integer,  // bytes\n    &quot;tx_total&quot;: Integer,  // bytes\n    &quot;rx_second&quot;: Integer, // bytes/second\n    &quot;tx_second&quot;: Integer, // bytes/second\n    &quot;backends&quot;: [\n        {\n            &quot;host&quot;: String,\n            &quot;port&quot;: String,\n            &quot;priority&quot;: Integer,\n            &quot;weight&quot;: Integer,\n            &quot;stats&quot;: {\n                &quot;live&quot;: Boolean,\n                &quot;total_connections&quot;: Integer,\n                &quot;active_connections&quot;: Integer,\n                &quot;refused_connections&quot;: Integer,\n                &quot;rx&quot;: Integer,  // bytes\n                &quot;tx&quot;: Integer   // bytes\n                &quot;rx_second&quot;: Integer, // bytes/second\n                &quot;tx_second&quot;: Integer, // bytes/second\n            }\n        },\n\n        // ... other backends ... \n    ]\n}\n</code></pre>\n";

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = "<p><img src=\"http://i.piccy.info/i9/c1ab436d6c65f957c29ff26d3ca7cc17/1465913811/28400/1043487/srv.png\" alt=\"\"></p>\n<p>We have unlimited quantity of docker containers on unknown docker nodes quantity .\nOn docker nodes we have registrator service.\nAnd yes : zookeeper+skydns or consul+registrator with native dns at the top of docker nodes.</p>\n<p>Sooooo - let&#39;s start balancing:\nIn this example we defined discovery type “srv” . Also we need to define dns server and port which will be our service discovery source. Also we need to define a service name pattern and request frequency. When all done end configured properly we will have a backend node list refreshed each N seconds . During this N seconds node health checked by healthshecks. If node disappeared(appeared) from dns - it was removed/added to backend nodes list. Actually nodes list was synced with SRV record. But healthcheck status for node does not changed. It means that if srv record contain node that actually failed - it will stay marked as failed after SRV list refresh. \nOne more important thing.  If in some reasons srv discovey failed (does not return correct response from dns server ) we may define what it needs to do with server backend nodes. If you need faile tolerance backend resistant to dns server failures add failpolicy = &quot;keeplast&quot; and tour backend stay same as last correct response from dns server.  In different situation - if you need consistency in all cases and it needs to be consistent more then return any non failed response -  add failpolicy = &quot;setempty&quot; and your node lists will be cleared and all requests to this server will be rejected</p>\n<pre><code class=\"lang-toml\">[servers.sample2]\nbind = &quot;localhost:3001&quot;\nprotocol = &quot;tcp&quot;\nbalance = &quot;weight&quot;\n\n  [servers.sample2.discovery]\n  failpolicy = &quot;keeplast&quot;\n  kind = &quot;srv&quot;\n  srv_lookup_server = &quot;66.66.66.66:8600&quot; # dns server and port\n  srv_lookup_pattern = &quot;api.service.ireland.consul.&quot; # SRV service pattern \n\n  [servers.sample2.healthcheck]\n  fails = 1                      \n  passes = 1\n  interval = &quot;2s&quot;                \n  kind = &quot;ping&quot;\n  timeout = &quot;500ms&quot;\n</code></pre>\n<p>We have ready to go solution. You can use leastconn, or iphash as you wish.</p>\n";

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = "<h2 id=\"-introduction-\"><strong>Introduction</strong></h2>\n<p>This Article describe service Balancing with Gobetween and Consul . We use Docker and Registrator With Consul SRV Discovery service. As a Gobetween Discovery service.</p>\n<p>Consul:</p>\n<pre><code class=\"lang-bash\">sever1.consul.example.com 10.0.0.11 bootstrap consul server , consul agent\nsever2.consul.example.com 10.0.0.12 consul server , consul agent\nsever2.consul.example.com 10.0.0.13 consul server , consul agent\n</code></pre>\n<p>Docker nodes :</p>\n<pre><code class=\"lang-bash\">server1.application1.example.com 10.0.1.11 application server1 Docker node1 with registrator service\nserver2.application2.example.com 10.0.1.12 application server2 Docker node2 with registrator service\nserver3.application3.example.com 10.0.1.13 application server3 Docker node3 with registrator service\n</code></pre>\n<p>Gobetween balancer:</p>\n<pre><code class=\"lang-text\">lb.exampe.com load balancer server will have 3 interfaces:\neth0 with wan address 55.55.55.55 , eth1 with 10.0.0.5 address and eth2 with 10.0.1.5\n</code></pre>\n<h2 id=\"consul-cluster-deployment\">Consul cluster deployment</h2>\n<p>First of all need to install Consul on server(N).consul.example.com:</p>\n<p>Download Consul package from <a href=\"https://consul.io\">https://consul.io</a> </p>\n<pre><code class=\"lang-bash\">#wget https://releases.hashicorp.com/consul/0.6.4/consul_0.6.4_linux_amd64.zip\n#unzip *.zip\n#mv consul /usr/sbin/consul\n</code></pre>\n<p>Test your consul binary</p>\n<pre><code class=\"lang-bash\">#consul --version\nConsul v0.6.4\nConsul Protocol: 3 (Understands back to: 1)\n</code></pre>\n<p><strong>After installation Consul on all servers let`s prepare consul cluster for initial start</strong></p>\n<p>First оf all need to generate token for our cluster:</p>\n<pre><code class=\"lang-bash\">#consul keygen\nozgffIYeX6owI0215KWR5Q==\n</code></pre>\n<p>Add consul user:</p>\n<pre><code class=\"lang-bash\">#adduser consul\n</code></pre>\n<p>Creating consul configuration directorines:</p>\n<pre><code class=\"lang-bash\">#mkdir -p /etc/consul.d/{bootstrap,server,client}\n</code></pre>\n<p>Creating Consul Data directories :</p>\n<pre><code class=\"lang-bash\">#mkdir /var/consul\n#chown consul:consul /var/consul\n</code></pre>\n<p>On bootstrap node (sever1.consul.example.com) need to create bootstrap config:</p>\n<p>/etc/consul.d/bootstrap/config.json</p>\n<pre><code class=\"lang-text\">{\n    &quot;bootstrap&quot;: true,\n    &quot;server&quot;: true,\n    &quot;datacenter&quot;: &quot;production&quot;,\n    &quot;data_dir&quot;: &quot;/var/consul&quot;,\n    &quot;encrypt&quot;: &quot;&quot;,\n    &quot;log_level&quot;: &quot;INFO&quot;,\n     &quot;encrypt&quot;:ozgffIYeX6owI0215KWR5Q==,\n    &quot;enable_syslog&quot;: true\n}\n</code></pre>\n<p>On all Сonsul servers need to create server config in /etc/consul.d/server/config.json:</p>\n<p>Server1:</p>\n<pre><code class=\"lang-text\">{\n    &quot;bootstrap&quot;: false,\n    &quot;server&quot;: true,\n    &quot;datacenter&quot;: &quot;production&quot;,\n    &quot;data_dir&quot;: &quot;/var/consul&quot;,\n    &quot;encrypt&quot;: &quot;ozgffIYeX6owI0215KWR5Q==&quot;,\n    &quot;log_level&quot;: &quot;INFO&quot;,\n    &quot;enable_syslog&quot;: true,\n    &quot;start_join&quot;: [&quot;10.0.0.12&quot;, &quot;10.0.0.13&quot;]\n}\n</code></pre>\n<p>Server2</p>\n<pre><code class=\"lang-text\">{\n    &quot;bootstrap&quot;: false,\n    &quot;server&quot;: true,\n    &quot;datacenter&quot;: &quot;production&quot;,\n    &quot;data_dir&quot;: &quot;/var/consul&quot;,\n    &quot;encrypt&quot;: &quot;ozgffIYeX6owI0215KWR5Q==&quot;,\n    &quot;log_level&quot;: &quot;INFO&quot;,\n    &quot;enable_syslog&quot;: true,\n    &quot;start_join&quot;: [&quot;10.0.0.11&quot;, &quot;10.0.0.13&quot;]\n}\n</code></pre>\n<p>Server3:</p>\n<pre><code class=\"lang-text\">{\n    &quot;bootstrap&quot;: false,\n    &quot;server&quot;: true,\n    &quot;datacenter&quot;: &quot;production&quot;,\n    &quot;data_dir&quot;: &quot;/var/consul&quot;,\n    &quot;encrypt&quot;: &quot;ozgffIYeX6owI0215KWR5Q==&quot;,\n    &quot;log_level&quot;: &quot;INFO&quot;,\n    &quot;enable_syslog&quot;: true,\n    &quot;start_join&quot;: [&quot;10.0.0.11&quot;, &quot;10.0.0.12&quot;]\n}\n</code></pre>\n<p>Next we will create upstart script on all consul servers  :\n /etc/init/consul:</p>\n<pre><code class=\"lang-init\">description &quot;Consul server process&quot;\n\nstart on (local-filesystems and net-device-up IFACE=eth0)\nstop on runlevel [!12345]\n\nrespawn\n\nsetuid consul\nsetgid consul\n\nexec consul agent -config-dir /etc/consul.d/server\n</code></pre>\n<p>Bootstrap cluster :\nOn sever1.consul.example.com:</p>\n<pre><code class=\"lang-bash\">#consul agent -config-dir /etc/consul.d/bootstrap\n</code></pre>\n<p>The service should start up and occupy the terminal window. In bootstrap mode, this server will self-elect as leader, creating a basis for forming the cluster.</p>\n<p>On another two servers (sever2.consul.example.com, sever3.consul.example.com) Simply run consul cluster</p>\n<pre><code class=\"lang-bash\">#start consul\n</code></pre>\n<p>These servers will connect to the bootstrapped server, completing the cluster. At this point, we have a cluster of three servers, two of which are operating normally, and one of which is in bootstrap mode, meaning that it can make executive decisions without consulting the other servers.</p>\n<p>On bootstrap nod press</p>\n<pre><code class=\"lang-text\">CTRL-C\n</code></pre>\n<p>And re-start bootstrap node as usual node :</p>\n<p>sever1.consul.example.com:</p>\n<pre><code class=\"lang-bash\">#consul start\n</code></pre>\n<p>Test Consul cluster with command:</p>\n<pre><code class=\"lang-bash\">#consul members -rpc-addr=10.0.0.11:8400\n\nOutput should be:\nNode           Address          Status  Type    Build  Protocol  DC\nserver1.consul.example.com  10.0.0.11:8301  alive   server  0.6.4  2        production\nserver2.consul.example.com  10.0.0.12:8301  alive   server  0.6.4  2        production\nserver3.consul.example.com  10.0.0.13:8301  alive   server  0.6.4  2        production\n</code></pre>\n<p>So, our cluster  up and running</p>\n<p>##Servers preparation  for application servers start </p>\n<p>We need run docker containers on our Application servers nodes:\nFor this it needs to  install docker on all  application servers:</p>\n<pre><code class=\"lang-text\">server1.application1.example.com \n\nserver2.application2.example.com \n\nserver3.application3.example.com\n</code></pre>\n<p>###Installing docker :</p>\n<pre><code class=\"lang-bash\"># sudo apt-get update\n\n# sudo apt-get install apt-transport-https ca-certificates\n\n#sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D\n\n#echo “deb https://apt.dockerproject.org/repo ubuntu-trusty main” &gt; /etc/apt/sources.list.d/docker.list\n\n#sudo apt-get update\n\n#sudo apt-get purge lxc-docker\n\n#apt-cache policy docker-engine\n\n#sudo apt-get update\n\n#sudo apt-get install linux-image-extra-$(uname -r)\n\n#apt-get install apparmor\n\n#sudo apt-get install docker-engine\n\n#sudo docker run hello-world\n</code></pre>\n<p>###Installing Registrator :</p>\n<p>Simply run container with registrator on each docker node </p>\n<pre><code class=\"lang-docker\">docker run -d \\\n    --name=registrator \\\n    --net=host \\\n    --volume=/var/run/docker.sock:/tmp/docker.sock \\\n    gliderlabs/registrator:latest \\\n      consul://10.0.1.5:8500\n</code></pre>\n<p>Now we are ready for running application containers</p>\n<p>###Prepare and start mock services  containers</p>\n<p>For testing needs we will run nginx default containers :</p>\n<p>Lets`s create simple html file to be able recognize  difference between servers and services during proxy testing.</p>\n<p>For this need to create  /tmp/test.html file on docker host maschine. Add ip address and service name into it. </p>\n<p>For  server1.application1.example.com  it will seems like:</p>\n<p>/tmp/test/test_service.html</p>\n<pre><code>  Server1.application1.example.com service1\n</code></pre><p>/tmp/test2/test_service.html</p>\n<pre><code>  Server1.application1.example.com service2\n</code></pre><p>For  server2.application1.example.com  it will seems like:</p>\n<p>/tmp/test/test_service.html</p>\n<pre><code>  Server2.application1.example.com service1\n</code></pre><p>/tmp/test2/test_service.html</p>\n<pre><code>  Server2.application1.example.com service2\n</code></pre><p>For  server3.application1.example.com  it will seems like:</p>\n<p>/tmp/test/test_service.html</p>\n<pre><code>  Server3.application1.example.com service1\n</code></pre><p>/tmp/test2/test_service.html</p>\n<pre><code>  Server3.application1.example.com service2\n</code></pre><p>Next we will use nginx default container as a test service containers</p>\n<p>Create two containers on each docker node :</p>\n<p>Server1.application1.example.com:</p>\n<pre><code class=\"lang-bash\">docker run -l proxied=true -d -p 22001:80 -e &quot;SERVICE_80_NAME=service1&quot; -v /tmp/test:/usr/share/nginx/html:ro nginx\n\ndocker run -l proxied=true -d -p 23001:80 -e &quot;SERVICE_80_NAME=service2&quot; -v /tmp/test2:/usr/share/nginx/html:ro nginx\n</code></pre>\n<p>Server2.application1.example.com</p>\n<pre><code class=\"lang-bash\">docker run -l proxied=true -d -p 22002:80 -e &quot;SERVICE_80_NAME=service1&quot; -v /tmp/test:/usr/share/nginx/html:ro nginx\n\ndocker run -l proxied=true -d -p 23002:80 -e &quot;SERVICE_80_NAME=service2&quot; -v /tmp/test2:/usr/share/nginx/html:ro nginx\n</code></pre>\n<p>Server3.application1.example.com</p>\n<pre><code class=\"lang-bash\">docker run -l proxied=true -d -p 22003:80 -e &quot;SERVICE_80_NAME=service1&quot; -v /tmp/test:/usr/share/nginx/html:ro nginx\n\ndocker run -l proxied=true -d -p 23003:80 -e &quot;SERVICE_80_NAME=service2&quot; -v /tmp/test2:/usr/share/nginx/html:ro nginx\n</code></pre>\n<p>We have consul cluster , registrator , docker nodes with mock services, so we are ready to deploy load balancer with service discovery.</p>\n<p>##Gobetween Service LB installation and configuration</p>\n<p>Download gobetween latest release from github:</p>\n<p><a href=\"Gobetween releases page\">https://github.com/yyyar/gobetween/releases</a></p>\n<pre><code class=\"lang-bash\">#wget https://github.com/yyyar/gobetween/releases/download/0.1.0/gobetween_0.1.0.dev_linux_amd64.tar.gz\n#tar -zxvf gobetween_0.1.0.dev_linux_amd64.tar.gz gobetween\n</code></pre>\n<p>Copy binary to /usr/sbin/</p>\n<pre><code class=\"lang-bash\">#cp gobetween /usr/sbin/\n</code></pre>\n<p>Also download init script:</p>\n<pre><code class=\"lang-bash\">#wget https://github.com/yyyar/gobetween/blob/master/config/init/gobetween.conf\n</code></pre>\n<p>Next need to place it into /etc/init/ directory </p>\n<p>And let`s create config for our service discovery cases and also for consul cluster.</p>\n<p>For consul cluster config will looks like:</p>\n<pre><code class=\"lang-toml\">[servers.sample]\nbind = &quot;10.0.1.5:8500&quot;\nprotocol = &quot;tcp&quot; \nbalance = &quot;roundrobin&quot;\n\nmax_connections = 100\nclient_idle_timeout = &quot;10m&quot;\nbackend_idle_timeout = &quot;10m&quot;\nbackend_connection_timeout = &quot;5s&quot;\n\n    [servers.sample.discovery]\n    kind = &quot;static&quot;\n    static_list = [\n      &quot;10.0.0.11:8500 weight=1&quot;,\n      &quot;10.0.0.12:8500 weight=1&quot;,\n      &quot;10.0.0.13:8500 weight=1&quot;\n    ]\n\n    [servers.sample.healthcheck]\n    fails = 1                      \n    passes = 1\n    interval = &quot;2s&quot;   \n    timeout=&quot;1s&quot;             \n    kind = &quot;ping&quot;\n    ping_timeout_duration = &quot;500ms&quot;\n</code></pre>\n<p>let`s build service discovery based on this configuration :\nThis example query consul DNS server on 10.0.0.11 (GOBETWEEN currently not supported UDP balancing so we will use single servers query) consul node for service1 and service2 list with external ports</p>\n<pre><code class=\"lang-toml\">[servers.sample2]\nbind = &quot;55.55.55.55:2000&quot;\nprotocol = &quot;tcp&quot;\nbalance = &quot;weight&quot;\n\n  [servers.sample2.discovery]\n  failpolicy = &quot;keeplast&quot;\n  kind = &quot;srv&quot;\n  srv_lookup_server = &quot;10.0.0.11:8600&quot; # dns server and port\n  srv_lookup_pattern = &quot;service1.service.production.consul.&quot; # SRV service pattern \n\n  [servers.sample2.healthcheck]\n  fails = 1                      \n  passes = 1\n  interval = &quot;2s&quot;                \n  kind = &quot;ping&quot;\n  timeout = &quot;500ms&quot;\n\n\n[servers.sample3]\nbind = &quot;55.55.55.55:2001&quot;\nprotocol = &quot;tcp&quot;\nbalance = &quot;weight&quot;\n\n  [servers.sample3.discovery]\n  failpolicy = &quot;keeplast&quot;\n  kind = &quot;srv&quot;\n  srv_lookup_server = &quot;10.0.0.11:8600&quot; # dns server and port\n  srv_lookup_pattern = &quot;service2.service.production.consul.&quot; # SRV service pattern \n\n  [servers.sample3.healthcheck]\n  fails = 1                      \n  passes = 1\n  interval = &quot;2s&quot;                \n  kind = &quot;ping&quot;\n  timeout = &quot;500ms&quot;\n</code></pre>\n<p>Let`s start Gobetween</p>\n<pre><code class=\"lang-bash\">#start gobetween\n</code></pre>\n<p>##Discovery test</p>\n<p>Check consul dns </p>\n<pre><code class=\"lang-bash\">#dig @10.0.0.11 -p 8600  service1.service.production.consul SRV\n\n &lt;&lt;&gt;&gt; DiG 9.9.5-3ubuntu0.6-Ubuntu &lt;&lt;&gt;&gt; @10.0.0.11 -p 8600 service1.service.production.consul SRV\n; (1 server found)\n;; global options: +cmd\n;; Got answer:\n;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 1820\n;; flags: qr aa rd; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 3\n;; WARNING: recursion requested but not available\n\n;; QUESTION SECTION:\n;service1.service.production.consul.    IN    SRV\n\n;; ANSWER SECTION:\nservice1.service.production.consul.    0 IN    SRV    1 1 22001 server1.application1.example.com.node.production.consul.\nservice1.service.production.consul.    0 IN    SRV    1 1 22002 server2.application1.example.com.node.production.consul.\nservice1.service.production.consul.    0 IN    SRV    1 1 22002 server3.application1.example.com.node.production.consul.\n\n;; ADDITIONAL SECTION:\nserver1.application1.example.com.node.production.consul. 0 IN A    10.0.1.11\nserver2.application1.example.com.node.production.consul. 0 IN A    10.0.1.12\nserver3.application1.example.com.node.production.consul. 0 IN A    10.0.1.13\n</code></pre>\n<pre><code class=\"lang-bash\">#dig @10.0.0.11 -p 8600  service2.service.production.consul SRV\n\nOutput shold be like:\n\n &lt;&lt;&gt;&gt; DiG 9.9.5-3ubuntu0.6-Ubuntu &lt;&lt;&gt;&gt; @10.0.0.11 -p 8600 service1.service.production.consul SRV\n; (1 server found)\n;; global options: +cmd\n;; Got answer:\n;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 1820\n;; flags: qr aa rd; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 3\n;; WARNING: recursion requested but not available\n\n;; QUESTION SECTION:\n;service2.service.production.consul.    IN    SRV\n\n;; ANSWER SECTION:\nservice2.service.production.consul.    0 IN    SRV    1 1 23001 server1.application1.example.com.node.production.consul.\nservice2.service.production.consul.    0 IN    SRV    1 1 23002 server2.application1.example.com.node.production.consul.\nservice2.service.production.consul.    0 IN    SRV    1 1 23002 server3.application1.example.com.node.production.consul.\n\n;; ADDITIONAL SECTION:\nserver1.application1.example.com.node.production.consul. 0 IN A    10.0.1.11\nserver2.application1.example.com.node.production.consul. 0 IN A    10.0.1.12\nserver3.application1.example.com.node.production.consul. 0 IN A    10.0.1.13\n</code></pre>\n<p>##Service discovery balancing test</p>\n<p>If so - that mean that registrators on all nodes successfully register services in consul cluster.</p>\n<p>And we ready to test our services:\nCheck 55.55.55.55:2000 and 55.55.55.55:2000 \nOutput will be like:</p>\n<pre><code class=\"lang-bash\">#curl -s http://55.55.55.55:2000/test_service.html\nServer1.application1.example.com service1\n##curl -s http://55.55.55.55:2000/test_service.html\nServer2.application1.example.com service1\n#curl -s http://55.55.55.55:2000/test_service.html\nServer3.application1.example.com service1\nEtc…\n#curl -s http://55.55.55.55:2001/test_service.html\nServer1.application1.example.com service2\n##curl -s http://55.55.55.55:2001/test_service.html\nServer2.application1.example.com service2\n#curl -s http://55.55.55.55:2001/test_service.html\nServer3.application1.example.com service2\n</code></pre>\n<p>Try to stop few containers and check that it will be disappeared from consul dns as well as from gobetween discovery.</p>\n";

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = "<p>For example, we need to balance three nodes/backends. </p>\n<p><img src=\"http://i.piccy.info/i9/4f0b4f9b1a5ba56b6a0559a17d611c5b/1465913152/19993/1043487/simple.png\" alt=\"\"></p>\n<p>We need to define our first gobetween server: </p>\n<pre><code class=\"lang-toml\">[servers.sample]\nbind = &quot;100.100.1.5:3000&quot;\nprotocol = &quot;tcp&quot;\nbalance = &quot;weight&quot;\n\nmax_connections = 10000\nclient_idle_timeout = &quot;10m&quot;\nbackend_idle_timeout = &quot;10m&quot;\nbackend_connection_timeout = &quot;2s&quot;\n\n[servers.sample.discovery]\nkind = &quot;static&quot;\nstatic_list = [\n    &quot;10.0.0.2:22399 weight=5&quot;,\n    &quot;10.0.0.3:22499 weight=3&quot;,\n    &quot;10.0.0.5:32399 weight=1&quot;\n]\n</code></pre>\n<p>And it needs to define health check method  in our sample it is tcp ping method. It means that each period of time defined in “interval” gobetween trying to open test session to each backend node from list and based on check success|fail mark node healthy or failed after N fails defined in “fails” variable , and restore it after T success checks defined in “passes” variable and if so - exclude it  balancing list or include it  again.  </p>\n<pre><code class=\"lang-toml\">[servers.sample.healthcheck]\nfails = 1                      \npasses = 1\ninterval = &quot;2s&quot;                \nkind = &quot;ping&quot;\nping_timeout_duration = &quot;500ms&quot;\n</code></pre>\n<p>Final version of our config will be:</p>\n<pre><code class=\"lang-toml\">\n[servers.sample]\nbind = &quot;localhost:3000&quot;\nprotocol = &quot;tcp&quot; \nbalance = &quot;roundrobin&quot;\n\nmax_connections = 10000\nclient_idle_timeout = &quot;10m&quot;\nbackend_idle_timeout = &quot;10m&quot;\nbackend_connection_timeout = &quot;2s&quot;\n\n    [servers.sample.discovery]\n    kind = &quot;static&quot;\n    static_list = [\n      &quot;10.0.0.2:22399 weight=5&quot;,\n      &quot;10.0.0.3:22499 weight=3&quot;,\n      &quot;10.0.0.5:32399 weight=1&quot;\n    ]\n\n    [servers.sample.healthcheck]\n    fails = 1                      \n    passes = 1\n    interval = &quot;2s&quot;   \n    timeout=&quot;1s&quot;             \n    kind = &quot;ping&quot;\n    ping_timeout_duration = &quot;500ms&quot;\n</code></pre>\n";

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = "<p><strong><em>(since 0.4.0)</em></strong></p>\n<p>You can configure gobetween to listen TLS and perform TLS termination so traffic would be decrypted and passed through TCP to backends.</p>\n<p>You just need to set you server protocol to tls and configure tls section:</p>\n<pre><code class=\"lang-toml\">[servers.default]\nprotocol = &quot;tls&quot;\n\n  [servers.default.tls]             # (required) if protocol == &quot;tls&quot;\n  cert_path = &quot;/path/to/file.crt&quot;   # (required) path to crt file\n  key_path = &quot;/path/to/file.key&quot;    # (required) path to key file\n  min_version = &quot;tls1&quot;              # (optional) &quot;ssl3&quot; | &quot;tls1&quot; | &quot;tls1.1&quot; | &quot;tls1.2&quot; - minimum allowed tls version\n  max_version = &quot;tls1.2&quot;            # (optional) maximum allowed tls version\n  ciphers = []                      # (optional) list of supported ciphers. Empty means all supported. For a list see https://golang.org/pkg/crypto/tls/#pkg-constants\n  prefer_server_ciphers = false     # (optional) if true server selects server&#39;s most preferred cipher\n  session_tickets = true            # (optional) if true enables session tickets\n</code></pre>\n";

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = "<p>Windows version config have few things should be noted to prepare proper config file.\nExec discovery path an  exec healthcheck path should be added with single quotes. </p>\n<h1 id=\"linux\">Linux</h1>\n<pre><code class=\"lang-toml\">exec_command = &quot;/etc/gobetween/healthchecks/exec_healthcheck.sh&quot;\nexec_command = [&quot;/etc/gobetween/scripts/discovery/exec_discovery.sh&quot;, &quot;arg1&quot;, &quot;arg2&quot;]\n</code></pre>\n<h1 id=\"windows\">Windows</h1>\n<pre><code class=\"lang-toml\"> exec_command = &#39;C:\\gobetween\\scripts\\healthchecks\\exec_healthcheck.bat&#39;\n exec_command = [&#39;C:\\gobetween\\scripts\\discovery\\exec_discovery.bat&#39;, &#39;arg1&#39;, &#39;arg2&#39;]\n</code></pre>\n";

/***/ },
/* 18 */
/***/ function(module, exports) {

"use strict";
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function pJS(tag_id, params) {

  var canvas_el = document.querySelector('#' + tag_id + ' > .particles-js-canvas-el');

  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };

  var pJS = this.pJS;

  /* params settings */
  if (params) {
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };

  pJS.fn.retinaInit = function () {

    if (pJS.retina_detect && window.devicePixelRatio > 1) {
      pJS.canvas.pxratio = window.devicePixelRatio;
      pJS.tmp.retina = true;
    } else {
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;
  };

  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function () {
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function () {

    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if (pJS && pJS.interactivity.events.resize) {

      window.addEventListener('resize', function () {

        pJS.canvas.w = pJS.canvas.el.offsetWidth;
        pJS.canvas.h = pJS.canvas.el.offsetHeight;

        /* resize canvas */
        if (pJS.tmp.retina) {
          pJS.canvas.w *= pJS.canvas.pxratio;
          pJS.canvas.h *= pJS.canvas.pxratio;
        }

        pJS.canvas.el.width = pJS.canvas.w;
        pJS.canvas.el.height = pJS.canvas.h;

        /* repaint canvas on anim disabled */
        if (!pJS.particles.move.enable) {
          pJS.fn.particlesEmpty();
          pJS.fn.particlesCreate();
          pJS.fn.particlesDraw();
          pJS.fn.vendors.densityAutoParticles();
        }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();
      });
    }
  };

  pJS.fn.canvasPaint = function () {
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function () {
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function (color, opacity, position) {

    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
    if (pJS.particles.size.anim.enable) {
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if (!pJS.particles.size.anim.sync) {
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;

    /* check position  - into the canvas */
    if (this.x > pJS.canvas.w - this.radius * 2) this.x = this.x - this.radius;else if (this.x < this.radius * 2) this.x = this.x + this.radius;
    if (this.y > pJS.canvas.h - this.radius * 2) this.y = this.y - this.radius;else if (this.y < this.radius * 2) this.y = this.y + this.radius;

    /* check position - avoid overlap */
    if (pJS.particles.move.bounce) {
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if (_typeof(color.value) == 'object') {

      if (color.value instanceof Array) {
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      } else {
        if (color.value.r != undefined && color.value.g != undefined && color.value.b != undefined) {
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          };
        }
        if (color.value.h != undefined && color.value.s != undefined && color.value.l != undefined) {
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          };
        }
      }
    } else if (color.value == 'random') {
      this.color.rgb = {
        r: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        g: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        b: Math.floor(Math.random() * (255 - 0 + 1)) + 0
      };
    } else if (typeof color.value == 'string') {
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    if (pJS.particles.opacity.anim.enable) {
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if (!pJS.particles.opacity.anim.sync) {
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    var velbase = {};
    switch (pJS.particles.move.direction) {
      case 'top':
        velbase = { x: 0, y: -1 };
        break;
      case 'top-right':
        velbase = { x: 0.5, y: -0.5 };
        break;
      case 'right':
        velbase = { x: 1, y: -0 };
        break;
      case 'bottom-right':
        velbase = { x: 0.5, y: 0.5 };
        break;
      case 'bottom':
        velbase = { x: 0, y: 1 };
        break;
      case 'bottom-left':
        velbase = { x: -0.5, y: 1 };
        break;
      case 'left':
        velbase = { x: -1, y: 0 };
        break;
      case 'top-left':
        velbase = { x: -0.5, y: -0.5 };
        break;
      default:
        velbase = { x: 0, y: 0 };
        break;
    }

    if (pJS.particles.move.straight) {
      this.vx = velbase.x;
      this.vy = velbase.y;
      if (pJS.particles.move.random) {
        this.vx = this.vx * Math.random();
        this.vy = this.vy * Math.random();
      }
    } else {
      this.vx = velbase.x + Math.random() - 0.5;
      this.vy = velbase.y + Math.random() - 0.5;
    }

    // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;

    /* if shape is image */

    var shape_type = pJS.particles.shape.type;
    if ((typeof shape_type === 'undefined' ? 'undefined' : _typeof(shape_type)) == 'object') {
      if (shape_type instanceof Array) {
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    } else {
      this.shape = shape_type;
    }

    if (this.shape == 'image') {
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      };
      if (!this.img.ratio) this.img.ratio = 1;
      if (pJS.tmp.img_type == 'svg__' && pJS.tmp.source_svg != undefined) {
        pJS.fn.vendors.createSvgImg(this);
        if (pJS.tmp.pushing) {
          this.img.loaded = false;
        }
      }
    }
  };

  pJS.fn.particle.prototype.draw = function () {

    var p = this;

    if (p.radius_bubble != undefined) {
      var radius = p.radius_bubble;
    } else {
      var radius = p.radius;
    }

    if (p.opacity_bubble != undefined) {
      var opacity = p.opacity_bubble;
    } else {
      var opacity = p.opacity;
    }

    if (p.color.rgb) {
      var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + opacity + ')';
    } else {
      var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + opacity + ')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch (p.shape) {

      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
        break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x - radius, p.y - radius, radius * 2, radius * 2);
        break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius, p.y + radius / 1.66, radius * 2, 3, 2);
        break;

      case 'polygon':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius / (pJS.particles.shape.polygon.nb_sides / 3.5), // startX
        p.y - radius / (2.66 / 3.5), // startY
        radius * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3), // sideLength
        pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
        1 // sideCountDenominator
        );
        break;

      case 'star':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius * 2 / (pJS.particles.shape.polygon.nb_sides / 4), // startX
        p.y - radius / (2 * 2.66 / 3.5), // startY
        radius * 2 * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3), // sideLength
        pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
        2 // sideCountDenominator
        );
        break;

      case 'image':
        var draw = function draw() {
          pJS.canvas.ctx.drawImage(img_obj, p.x - radius, p.y - radius, radius * 2, radius * 2 / p.img.ratio);
        };

        if (pJS.tmp.img_type == 'svg__') {
          var img_obj = p.img.obj;
        } else {
          var img_obj = pJS.tmp.img_obj;
        }

        if (img_obj) {
          draw();
        }

        break;

    }

    pJS.canvas.ctx.closePath();

    if (pJS.particles.shape.stroke.width > 0) {
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }

    pJS.canvas.ctx.fill();
  };

  pJS.fn.particlesCreate = function () {
    for (var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };

  pJS.fn.particlesUpdate = function () {

    for (var i = 0; i < pJS.particles.array.length; i++) {

      /* the particle */
      var p = pJS.particles.array[i];

      // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */
      if (pJS.particles.move.enable) {
        var ms = pJS.particles.move.speed / 2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }

      /* change opacity status */
      if (pJS.particles.opacity.anim.enable) {
        if (p.opacity_status == true) {
          if (p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        } else {
          if (p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if (p.opacity < 0) p.opacity = 0;
      }

      /* change size */
      if (pJS.particles.size.anim.enable) {
        if (p.size_status == true) {
          if (p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        } else {
          if (p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if (p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if (pJS.particles.move.out_mode == 'bounce') {
        var new_pos = {
          x_left: p.radius,
          x_right: pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        };
      } else {
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        };
      }

      if (p.x - p.radius > pJS.canvas.w) {
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      } else if (p.x + p.radius < 0) {
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if (p.y - p.radius > pJS.canvas.h) {
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      } else if (p.y + p.radius < 0) {
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch (pJS.particles.move.out_mode) {
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;else if (p.y - p.radius < 0) p.vy = -p.vy;
          break;
      }

      /* events */
      if (isInArray('grab', pJS.interactivity.events.onhover.mode)) {
        pJS.fn.modes.grabParticle(p);
      }

      if (isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)) {
        pJS.fn.modes.bubbleParticle(p);
      }

      if (isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)) {
        pJS.fn.modes.repulseParticle(p);
      }

      /* interaction auto between particles */
      if (pJS.particles.line_linked.enable || pJS.particles.move.attract.enable) {
        for (var j = i + 1; j < pJS.particles.array.length; j++) {
          var p2 = pJS.particles.array[j];

          /* link particles */
          if (pJS.particles.line_linked.enable) {
            pJS.fn.interact.linkParticles(p, p2);
          }

          /* attract particles */
          if (pJS.particles.move.attract.enable) {
            pJS.fn.interact.attractParticles(p, p2);
          }

          /* bounce particles */
          if (pJS.particles.move.bounce) {
            pJS.fn.interact.bounceParticles(p, p2);
          }
        }
      }
    }
  };

  pJS.fn.particlesDraw = function () {

    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.particlesUpdate();

    /* draw each particle */
    for (var i = 0; i < pJS.particles.array.length; i++) {
      var p = pJS.particles.array[i];
      p.draw();
    }
  };

  pJS.fn.particlesEmpty = function () {
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function () {

    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();

    /* restart */
    pJS.fn.vendors.start();
  };

  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function (p1, p2) {

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx * dx + dy * dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if (dist <= pJS.particles.line_linked.distance) {

      var opacity_line = pJS.particles.line_linked.opacity - dist / (1 / pJS.particles.line_linked.opacity) / pJS.particles.line_linked.distance;

      if (opacity_line > 0) {

        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();
      }
    }
  };

  pJS.fn.interact.attractParticles = function (p1, p2) {

    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx * dx + dy * dy);

    if (dist <= pJS.particles.line_linked.distance) {

      var ax = dx / (pJS.particles.move.attract.rotateX * 1000),
          ay = dy / (pJS.particles.move.attract.rotateY * 1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;
    }
  };

  pJS.fn.interact.bounceParticles = function (p1, p2) {

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx * dx + dy * dy),
        dist_p = p1.radius + p2.radius;

    if (dist <= dist_p) {
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }
  };

  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.pushParticles = function (nb, pos) {

    pJS.tmp.pushing = true;

    for (var i = 0; i < nb; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value, {
        'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
        'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
      }));
      if (i == nb - 1) {
        if (!pJS.particles.move.enable) {
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }
  };

  pJS.fn.modes.removeParticles = function (nb) {

    pJS.particles.array.splice(0, nb);
    if (!pJS.particles.move.enable) {
      pJS.fn.particlesDraw();
    }
  };

  pJS.fn.modes.bubbleParticle = function (p) {

    /* on hover event */
    if (pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)) {
      var init = function init() {
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      };

      /* mousemove - check ratio */


      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {

        if (ratio >= 0 && pJS.interactivity.status == 'mousemove') {

          /* size */
          if (pJS.interactivity.modes.bubble.size != pJS.particles.size.value) {

            if (pJS.interactivity.modes.bubble.size > pJS.particles.size.value) {
              var size = p.radius + pJS.interactivity.modes.bubble.size * ratio;
              if (size >= 0) {
                p.radius_bubble = size;
              }
            } else {
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - dif * ratio;
              if (size > 0) {
                p.radius_bubble = size;
              } else {
                p.radius_bubble = 0;
              }
            }
          }

          /* opacity */
          if (pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value) {

            if (pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value) {
              var opacity = pJS.interactivity.modes.bubble.opacity * ratio;
              if (opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity) {
                p.opacity_bubble = opacity;
              }
            } else {
              var opacity = p.opacity - (pJS.particles.opacity.value - pJS.interactivity.modes.bubble.opacity) * ratio;
              if (opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity) {
                p.opacity_bubble = opacity;
              }
            }
          }
        }
      } else {
        init();
      }

      /* mouseleave */
      if (pJS.interactivity.status == 'mouseleave') {
        init();
      }
    }

    /* on click event */
    else if (pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)) {
        var process = function process(bubble_param, particles_param, p_obj_bubble, p_obj, id) {

          if (bubble_param != particles_param) {

            if (!pJS.tmp.bubble_duration_end) {
              if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
                if (p_obj_bubble != undefined) var obj = p_obj_bubble;else var obj = p_obj;
                if (obj != bubble_param) {
                  var value = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration;
                  if (id == 'size') p.radius_bubble = value;
                  if (id == 'opacity') p.opacity_bubble = value;
                }
              } else {
                if (id == 'size') p.radius_bubble = undefined;
                if (id == 'opacity') p.opacity_bubble = undefined;
              }
            } else {
              if (p_obj_bubble != undefined) {
                var value_tmp = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration,
                    dif = bubble_param - value_tmp;
                value = bubble_param + dif;
                if (id == 'size') p.radius_bubble = value;
                if (id == 'opacity') p.opacity_bubble = value;
              }
            }
          }
        };

        if (pJS.tmp.bubble_clicking) {
          var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
              dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
              dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
              time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time) / 1000;

          if (time_spent > pJS.interactivity.modes.bubble.duration) {
            pJS.tmp.bubble_duration_end = true;
          }

          if (time_spent > pJS.interactivity.modes.bubble.duration * 2) {
            pJS.tmp.bubble_clicking = false;
            pJS.tmp.bubble_duration_end = false;
          }
        }

        if (pJS.tmp.bubble_clicking) {
          /* size */
          process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
          /* opacity */
          process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
        }
      }
  };

  pJS.fn.modes.repulseParticle = function (p) {

    if (pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);

      var normVec = { x: dx_mouse / dist_mouse, y: dy_mouse / dist_mouse },
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp(1 / repulseRadius * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);

      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      };

      if (pJS.particles.move.out_mode == 'bounce') {
        if (pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if (pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      } else {
        p.x = pos.x;
        p.y = pos.y;
      }
    } else if (pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

      if (!pJS.tmp.repulse_finish) {
        pJS.tmp.repulse_count++;
        if (pJS.tmp.repulse_count == pJS.particles.array.length) {
          pJS.tmp.repulse_finish = true;
        }
      }

      if (pJS.tmp.repulse_clicking) {
        var process = function process() {

          var f = Math.atan2(dy, dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if (pJS.particles.move.out_mode == 'bounce') {
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            };
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }
        };

        // default


        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance / 6, 3);

        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx * dx + dy * dy;

        var force = -repulseRadius / d * 1;

        if (d <= repulseRadius) {
          process();
        }

        // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }

      } else {

        if (pJS.tmp.repulse_clicking == false) {

          p.vx = p.vx_i;
          p.vy = p.vy_i;
        }
      }
    }
  };

  pJS.fn.modes.grabParticle = function (p) {

    if (pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if (dist_mouse <= pJS.interactivity.modes.grab.distance) {

        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - dist_mouse / (1 / pJS.interactivity.modes.grab.line_linked.opacity) / pJS.interactivity.modes.grab.distance;

        if (opacity_line > 0) {

          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();
        }
      }
    }
  };

  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function () {

    /* events target element */
    if (pJS.interactivity.detect_on == 'window') {
      pJS.interactivity.el = window;
    } else {
      pJS.interactivity.el = pJS.canvas.el;
    }

    /* detect mouse pos - on hover / click event */
    if (pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable) {

      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function (e) {

        if (pJS.interactivity.el == window) {
          var pos_x = e.clientX,
              pos_y = e.clientY;
        } else {
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if (pJS.tmp.retina) {
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';
      });

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener('mouseleave', function (e) {

        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';
      });
    }

    /* on click event */
    if (pJS.interactivity.events.onclick.enable) {

      pJS.interactivity.el.addEventListener('click', function () {

        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if (pJS.interactivity.events.onclick.enable) {

          switch (pJS.interactivity.events.onclick.mode) {

            case 'push':
              if (pJS.particles.move.enable) {
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              } else {
                if (pJS.interactivity.modes.push.particles_nb == 1) {
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                } else if (pJS.interactivity.modes.push.particles_nb > 1) {
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }
              break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
              break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
              break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function () {
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration * 1000);
              break;

          }
        }
      });
    }
  };

  pJS.fn.vendors.densityAutoParticles = function () {

    if (pJS.particles.number.density.enable) {

      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if (pJS.tmp.retina) {
        area = area / (pJS.canvas.pxratio * 2);
      }

      /* calc number of particles based on density area */
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      var missing_particles = pJS.particles.array.length - nb_particles;
      if (missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));else pJS.fn.modes.removeParticles(missing_particles);
    }
  };

  pJS.fn.vendors.checkOverlap = function (p1, position) {
    for (var i = 0; i < pJS.particles.array.length; i++) {
      var p2 = pJS.particles.array[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= p1.radius + p2.radius) {
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };

  pJS.fn.vendors.createSvgImg = function (p) {

    /* set color to svg__ element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
      if (p.color.rgb) {
        var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + p.opacity + ')';
      } else {
        var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + p.opacity + ')';
      }
      return color_value;
    });

    /* prepare to create img with colored svg__ */
    var svg = new Blob([coloredSvgXml], { type: 'image/svg__+xml;charset=utf-8' }),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function () {
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;
  };

  pJS.fn.vendors.destroypJS = function () {
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };

  pJS.fn.vendors.drawShape = function (c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {

    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0, 0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength, 0);
      c.translate(sideLength, 0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();
  };

  pJS.fn.vendors.exportImg = function () {
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };

  pJS.fn.vendors.loadImg = function (type) {

    pJS.tmp.img_error = undefined;

    if (pJS.particles.shape.image.src != '') {

      if (type == 'svg__') {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);
        xhr.onreadystatechange = function (data) {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            } else {
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        };
        xhr.send();
      } else {

        var img = new Image();
        img.addEventListener('load', function () {
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;
      }
    } else {
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }
  };

  pJS.fn.vendors.draw = function () {

    if (pJS.particles.shape.type == 'image') {

      if (pJS.tmp.img_type == 'svg__') {

        if (pJS.tmp.count_svg >= pJS.particles.number.value) {
          pJS.fn.particlesDraw();
          if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        } else {
          //console.log('still loading...');
          if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }
      } else {

        if (pJS.tmp.img_obj != undefined) {
          pJS.fn.particlesDraw();
          if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        } else {
          if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }
      }
    } else {
      pJS.fn.particlesDraw();
      if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }
  };

  pJS.fn.vendors.checkBeforeDraw = function () {

    // if shape is image
    if (pJS.particles.shape.type == 'image') {

      if (pJS.tmp.img_type == 'svg__' && pJS.tmp.source_svg == undefined) {
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      } else {
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if (!pJS.tmp.img_error) {
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
      }
    } else {
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }
  };

  pJS.fn.vendors.init = function () {

    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);
  };

  pJS.fn.vendors.start = function () {

    if (isInArray('image', pJS.particles.shape.type)) {
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    } else {
      pJS.fn.vendors.checkBeforeDraw();
    }
  };

  /* ---------- pJS - start ------------ */

  pJS.fn.vendors.eventsListeners();

  pJS.fn.vendors.start();
};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function someFunc(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor && source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      someFunc(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

window.cancelRequestAnimFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}();

function hexToRgb(hex) {
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function (tag_id, params) {

  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if (typeof tag_id != 'string') {
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if (!tag_id) {
    tag_id = 'particles-js';
  }

  /* pJS elements */
  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if (exist_canvas.length) {
    while (exist_canvas.length > 0) {
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if (canvas != null) {
    pJSDom.push(new pJS(tag_id, params));
  }
};

window.particlesJS.load = function (tag_id, path_config_json, callback) {

  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if (callback) callback();
      } else {
        console.log('Error pJS - XMLHttpRequest status: ' + xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();
};

/*** EXPORTS FROM exports-loader ***/
exports["particlesJS"] = window.particlesJS;
exports["pJSDom"] = window.pJSDom;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _Sidebar = __webpack_require__(1);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var page = location.pathname.match(/documentation/);

if (page) {
    (function () {
        var documentationSideBar = document.getElementsByClassName('documentation-side-bar')[0];
        var loadDoc = function loadDoc(fileName) {
            if (!fileName) fileName = 'Introduction';
            var link = document.querySelectorAll('a[href="#' + fileName + '"]');
            var file = void 0;

            try {
                file = __webpack_require__(33)("./" + fileName + '.md');
            } catch (err) {
                file = __webpack_require__(0);
            }

            if (link.length) {
                document.getElementsByClassName('documentation-content-title')[0].innerHTML = link[0].innerText;
            }

            document.getElementsByClassName('documentation-content')[0].innerHTML = file;
        };

        var scrollTo = function scrollTo(y, duration) {
            if (duration <= 0) return;
            var difference = y - document.body.scrollTop;
            var perTick = difference / duration * 10;

            setTimeout(function () {
                document.body.scrollTop = document.body.scrollTop + perTick;
                if (document.body.scrollTop === y) return;
                scrollTo(y, duration - 10);
            }, 10);
        };

        var findPosY = function findPosY(obj) {
            var curtop = 0;
            if (obj.offsetParent) {
                while (1) {
                    curtop += obj.offsetTop;
                    if (!obj.offsetParent) {
                        break;
                    }
                    obj = obj.offsetParent;
                }
            } else if (obj.y) {
                curtop += obj.y;
            }
            return curtop;
        };

        documentationSideBar.addEventListener('click', function (e) {
            if (e.target.nodeName !== 'A') return;
            e.preventDefault();
            e.stopPropagation();
            location.hash = e.target.attributes['href'].value;
            var activeLink = document.querySelectorAll('.documentation-side-bar a.active')[0];
            var title = document.getElementsByClassName('documentation-content-title')[0];
            var y = 0;

            window.screen.width > 768 ? y = title.offsetTop : y = findPosY(title);

            activeLink && activeLink.classList.remove('active');

            e.target.setAttribute('class', 'active');

            scrollTo(y, 200);

            loadDoc(location.hash.substr(1));
        });

        documentationSideBar.innerHTML = _Sidebar2.default.replace(new RegExp('href="', 'g'), 'href="#');

        loadDoc(location.hash.substr(1));
    })();
}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _simpleAjax = __webpack_require__(25);

var _simpleAjax2 = _interopRequireDefault(_simpleAjax);

var _markdown = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var page = location.pathname.match(/downloads/);

if (page) {
    var releases = new _simpleAjax2.default({
        url: 'https://api.github.com/repos/yyyar/gobetween/releases',
        method: 'GET',
        dataType: 'json'
    });

    releases.on('success', function (event, response) {
        var linksWrap = document.getElementsByClassName('release-links')[0];
        var currentVer = document.getElementsByClassName('current-version')[0];
        var lastVersion = response[0];

        for (var i = 1; i < response.length; i++) {
            var obj = response[i];
            var a = document.createElement('a');
            var br = document.createElement('br');
            a.href = obj.html_url;
            a.innerHTML = '[' + obj.name + ']';
            a.target = '_blank';
            linksWrap.appendChild(a);
            linksWrap.appendChild(br);
        }

        for (var j = 0; j < lastVersion.assets.length; j++) {
            var os = lastVersion.assets[j];

            os.name.match(/darwin_386/g) && document.getElementsByClassName('darwin-86')[0].setAttribute('href', os.browser_download_url);
            os.name.match(/darwin_amd64/g) && document.getElementsByClassName('darwin-64')[0].setAttribute('href', os.browser_download_url);
            os.name.match(/linux_386/g) && document.getElementsByClassName('linux-86')[0].setAttribute('href', os.browser_download_url);
            os.name.match(/linux_amd64/g) && document.getElementsByClassName('linux-64')[0].setAttribute('href', os.browser_download_url);
            os.name.match(/windows_386/g) && document.getElementsByClassName('windows-86')[0].setAttribute('href', os.browser_download_url);
            os.name.match(/windows_amd64/g) && document.getElementsByClassName('windows-64')[0].setAttribute('href', os.browser_download_url);
        }

        currentVer.innerHTML = 'v' + lastVersion.name;

        document.getElementsByClassName('release-content')[0].innerHTML = _markdown.markdown.toHTML(lastVersion.body);
    });

    releases.on('error', function (event, response) {
        console.log('error', event);
    });

    releases.send();
}

/***/ },
/* 21 */
/***/ function(module, exports) {

"use strict";
'use strict';

var sandwich = document.getElementById('mobile-sandwich');

sandwich.addEventListener('click', function (e) {
    var nav = e.target.parentNode.nextElementSibling;

    if (nav.className === 'show-mob-nav') {
        nav.className = '';
    } else {
        nav.className = 'show-mob-nav';
    }
});

/***/ },
/* 22 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

// super simple module for the most common nodejs use case.
exports.markdown = __webpack_require__(24);
exports.parse = exports.markdown.toHTML;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

// Released under MIT license
// Copyright (c) 2009-2010 Dominic Baggott
// Copyright (c) 2009-2010 Ash Berlin
// Copyright (c) 2011 Christoph Dorn <christoph@christophdorn.com> (http://www.christophdorn.com)

/*jshint browser:true, devel:true */

(function (expose) {

  /**
   *  class Markdown
   *
   *  Markdown processing in Javascript done right. We have very particular views
   *  on what constitutes 'right' which include:
   *
   *  - produces well-formed HTML (this means that em and strong nesting is
   *    important)
   *
   *  - has an intermediate representation to allow processing of parsed data (We
   *    in fact have two, both as [JsonML]: a markdown tree and an HTML tree).
   *
   *  - is easily extensible to add new dialects without having to rewrite the
   *    entire parsing mechanics
   *
   *  - has a good test suite
   *
   *  This implementation fulfills all of these (except that the test suite could
   *  do with expanding to automatically run all the fixtures from other Markdown
   *  implementations.)
   *
   *  ##### Intermediate Representation
   *
   *  *TODO* Talk about this :) Its JsonML, but document the node names we use.
   *
   *  [JsonML]: http://jsonml.org/ "JSON Markup Language"
   **/
  var Markdown = expose.Markdown = function (dialect) {
    switch (typeof dialect === "undefined" ? "undefined" : _typeof(dialect)) {
      case "undefined":
        this.dialect = Markdown.dialects.Gruber;
        break;
      case "object":
        this.dialect = dialect;
        break;
      default:
        if (dialect in Markdown.dialects) {
          this.dialect = Markdown.dialects[dialect];
        } else {
          throw new Error("Unknown Markdown dialect '" + String(dialect) + "'");
        }
        break;
    }
    this.em_state = [];
    this.strong_state = [];
    this.debug_indent = "";
  };

  /**
   *  parse( markdown, [dialect] ) -> JsonML
   *  - markdown (String): markdown string to parse
   *  - dialect (String | Dialect): the dialect to use, defaults to gruber
   *
   *  Parse `markdown` and return a markdown document as a Markdown.JsonML tree.
   **/
  expose.parse = function (source, dialect) {
    // dialect will default if undefined
    var md = new Markdown(dialect);
    return md.toTree(source);
  };

  /**
   *  toHTML( markdown, [dialect]  ) -> String
   *  toHTML( md_tree ) -> String
   *  - markdown (String): markdown string to parse
   *  - md_tree (Markdown.JsonML): parsed markdown tree
   *
   *  Take markdown (either as a string or as a JsonML tree) and run it through
   *  [[toHTMLTree]] then turn it into a well-formated HTML fragment.
   **/
  expose.toHTML = function toHTML(source, dialect, options) {
    var input = expose.toHTMLTree(source, dialect, options);

    return expose.renderJsonML(input);
  };

  /**
   *  toHTMLTree( markdown, [dialect] ) -> JsonML
   *  toHTMLTree( md_tree ) -> JsonML
   *  - markdown (String): markdown string to parse
   *  - dialect (String | Dialect): the dialect to use, defaults to gruber
   *  - md_tree (Markdown.JsonML): parsed markdown tree
   *
   *  Turn markdown into HTML, represented as a JsonML tree. If a string is given
   *  to this function, it is first parsed into a markdown tree by calling
   *  [[parse]].
   **/
  expose.toHTMLTree = function toHTMLTree(input, dialect, options) {
    // convert string input to an MD tree
    if (typeof input === "string") input = this.parse(input, dialect);

    // Now convert the MD tree to an HTML tree

    // remove references from the tree
    var attrs = extract_attr(input),
        refs = {};

    if (attrs && attrs.references) {
      refs = attrs.references;
    }

    var html = convert_tree_to_html(input, refs, options);
    merge_text_nodes(html);
    return html;
  };

  // For Spidermonkey based engines
  function mk_block_toSource() {
    return "Markdown.mk_block( " + uneval(this.toString()) + ", " + uneval(this.trailing) + ", " + uneval(this.lineNumber) + " )";
  }

  // node
  function mk_block_inspect() {
    var util = __webpack_require__(32);
    return "Markdown.mk_block( " + util.inspect(this.toString()) + ", " + util.inspect(this.trailing) + ", " + util.inspect(this.lineNumber) + " )";
  }

  var mk_block = Markdown.mk_block = function (block, trail, line) {
    // Be helpful for default case in tests.
    if (arguments.length == 1) trail = "\n\n";

    var s = new String(block);
    s.trailing = trail;
    // To make it clear its not just a string
    s.inspect = mk_block_inspect;
    s.toSource = mk_block_toSource;

    if (line != undefined) s.lineNumber = line;

    return s;
  };

  function count_lines(str) {
    var n = 0,
        i = -1;
    while ((i = str.indexOf("\n", i + 1)) !== -1) {
      n++;
    }return n;
  }

  // Internal - split source into rough blocks
  Markdown.prototype.split_blocks = function splitBlocks(input, startLine) {
    input = input.replace(/(\r\n|\n|\r)/g, "\n");
    // [\s\S] matches _anything_ (newline or space)
    // [^] is equivalent but doesn't work in IEs.
    var re = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
        blocks = [],
        m;

    var line_no = 1;

    if ((m = /^(\s*\n)/.exec(input)) != null) {
      // skip (but count) leading blank lines
      line_no += count_lines(m[0]);
      re.lastIndex = m[0].length;
    }

    while ((m = re.exec(input)) !== null) {
      if (m[2] == "\n#") {
        m[2] = "\n";
        re.lastIndex--;
      }
      blocks.push(mk_block(m[1], m[2], line_no));
      line_no += count_lines(m[0]);
    }

    return blocks;
  };

  /**
   *  Markdown#processBlock( block, next ) -> undefined | [ JsonML, ... ]
   *  - block (String): the block to process
   *  - next (Array): the following blocks
   *
   * Process `block` and return an array of JsonML nodes representing `block`.
   *
   * It does this by asking each block level function in the dialect to process
   * the block until one can. Succesful handling is indicated by returning an
   * array (with zero or more JsonML nodes), failure by a false value.
   *
   * Blocks handlers are responsible for calling [[Markdown#processInline]]
   * themselves as appropriate.
   *
   * If the blocks were split incorrectly or adjacent blocks need collapsing you
   * can adjust `next` in place using shift/splice etc.
   *
   * If any of this default behaviour is not right for the dialect, you can
   * define a `__call__` method on the dialect that will get invoked to handle
   * the block processing.
   */
  Markdown.prototype.processBlock = function processBlock(block, next) {
    var cbs = this.dialect.block,
        ord = cbs.__order__;

    if ("__call__" in cbs) {
      return cbs.__call__.call(this, block, next);
    }

    for (var i = 0; i < ord.length; i++) {
      //D:this.debug( "Testing", ord[i] );
      var res = cbs[ord[i]].call(this, block, next);
      if (res) {
        //D:this.debug("  matched");
        if (!isArray(res) || res.length > 0 && !isArray(res[0])) this.debug(ord[i], "didn't return a proper array");
        //D:this.debug( "" );
        return res;
      }
    }

    // Uhoh! no match! Should we throw an error?
    return [];
  };

  Markdown.prototype.processInline = function processInline(block) {
    return this.dialect.inline.__call__.call(this, String(block));
  };

  /**
   *  Markdown#toTree( source ) -> JsonML
   *  - source (String): markdown source to parse
   *
   *  Parse `source` into a JsonML tree representing the markdown document.
   **/
  // custom_tree means set this.tree to `custom_tree` and restore old value on return
  Markdown.prototype.toTree = function toTree(source, custom_root) {
    var blocks = source instanceof Array ? source : this.split_blocks(source);

    // Make tree a member variable so its easier to mess with in extensions
    var old_tree = this.tree;
    try {
      this.tree = custom_root || this.tree || ["markdown"];

      blocks: while (blocks.length) {
        var b = this.processBlock(blocks.shift(), blocks);

        // Reference blocks and the like won't return any content
        if (!b.length) continue blocks;

        this.tree.push.apply(this.tree, b);
      }
      return this.tree;
    } finally {
      if (custom_root) {
        this.tree = old_tree;
      }
    }
  };

  // Noop by default
  Markdown.prototype.debug = function () {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(this.debug_indent);
    if (typeof print !== "undefined") print.apply(print, args);
    if (typeof console !== "undefined" && typeof console.log !== "undefined") console.log.apply(null, args);
  };

  Markdown.prototype.loop_re_over_block = function (re, block, cb) {
    // Dont use /g regexps with this
    var m,
        b = block.valueOf();

    while (b.length && (m = re.exec(b)) != null) {
      b = b.substr(m[0].length);
      cb.call(this, m);
    }
    return b;
  };

  /**
   * Markdown.dialects
   *
   * Namespace of built-in dialects.
   **/
  Markdown.dialects = {};

  /**
   * Markdown.dialects.Gruber
   *
   * The default dialect that follows the rules set out by John Gruber's
   * markdown.pl as closely as possible. Well actually we follow the behaviour of
   * that script which in some places is not exactly what the syntax web page
   * says.
   **/
  Markdown.dialects.Gruber = {
    block: {
      atxHeader: function atxHeader(block, next) {
        var m = block.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);

        if (!m) return undefined;

        var header = ["header", { level: m[1].length }];
        Array.prototype.push.apply(header, this.processInline(m[2]));

        if (m[0].length < block.length) next.unshift(mk_block(block.substr(m[0].length), block.trailing, block.lineNumber + 2));

        return [header];
      },

      setextHeader: function setextHeader(block, next) {
        var m = block.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);

        if (!m) return undefined;

        var level = m[2] === "=" ? 1 : 2;
        var header = ["header", { level: level }, m[1]];

        if (m[0].length < block.length) next.unshift(mk_block(block.substr(m[0].length), block.trailing, block.lineNumber + 2));

        return [header];
      },

      code: function code(block, next) {
        // |    Foo
        // |bar
        // should be a code block followed by a paragraph. Fun
        //
        // There might also be adjacent code block to merge.

        var ret = [],
            re = /^(?: {0,3}\t| {4})(.*)\n?/,
            lines;

        // 4 spaces + content
        if (!block.match(re)) return undefined;

        block_search: do {
          // Now pull out the rest of the lines
          var b = this.loop_re_over_block(re, block.valueOf(), function (m) {
            ret.push(m[1]);
          });

          if (b.length) {
            // Case alluded to in first comment. push it back on as a new block
            next.unshift(mk_block(b, block.trailing));
            break block_search;
          } else if (next.length) {
            // Check the next block - it might be code too
            if (!next[0].match(re)) break block_search;

            // Pull how how many blanks lines follow - minus two to account for .join
            ret.push(block.trailing.replace(/[^\n]/g, "").substring(2));

            block = next.shift();
          } else {
            break block_search;
          }
        } while (true);

        return [["code_block", ret.join("\n")]];
      },

      horizRule: function horizRule(block, next) {
        // this needs to find any hr in the block to handle abutting blocks
        var m = block.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);

        if (!m) {
          return undefined;
        }

        var jsonml = [["hr"]];

        // if there's a leading abutting block, process it
        if (m[1]) {
          jsonml.unshift.apply(jsonml, this.processBlock(m[1], []));
        }

        // if there's a trailing abutting block, stick it into next
        if (m[3]) {
          next.unshift(mk_block(m[3]));
        }

        return jsonml;
      },

      // There are two types of lists. Tight and loose. Tight lists have no whitespace
      // between the items (and result in text just in the <li>) and loose lists,
      // which have an empty line between list items, resulting in (one or more)
      // paragraphs inside the <li>.
      //
      // There are all sorts weird edge cases about the original markdown.pl's
      // handling of lists:
      //
      // * Nested lists are supposed to be indented by four chars per level. But
      //   if they aren't, you can get a nested list by indenting by less than
      //   four so long as the indent doesn't match an indent of an existing list
      //   item in the 'nest stack'.
      //
      // * The type of the list (bullet or number) is controlled just by the
      //    first item at the indent. Subsequent changes are ignored unless they
      //    are for nested lists
      //
      lists: function () {
        // Use a closure to hide a few variables.
        var any_list = "[*+-]|\\d+\\.",
            bullet_list = /[*+-]/,
            number_list = /\d+\./,

        // Capture leading indent as it matters for determining nested lists.
        is_list_re = new RegExp("^( {0,3})(" + any_list + ")[ \t]+"),
            indent_re = "(?: {0,3}\\t| {4})";

        // TODO: Cache this regexp for certain depths.
        // Create a regexp suitable for matching an li for a given stack depth
        function regex_for_depth(depth) {

          return new RegExp(
          // m[1] = indent, m[2] = list_type
          "(?:^(" + indent_re + "{0," + depth + "} {0,3})(" + any_list + ")\\s+)|" +
          // m[3] = cont
          "(^" + indent_re + "{0," + (depth - 1) + "}[ ]{0,4})");
        }
        function expand_tab(input) {
          return input.replace(/ {0,3}\t/g, "    ");
        }

        // Add inline content `inline` to `li`. inline comes from processInline
        // so is an array of content
        function add(li, loose, inline, nl) {
          if (loose) {
            li.push(["para"].concat(inline));
            return;
          }
          // Hmmm, should this be any block level element or just paras?
          var add_to = li[li.length - 1] instanceof Array && li[li.length - 1][0] == "para" ? li[li.length - 1] : li;

          // If there is already some content in this list, add the new line in
          if (nl && li.length > 1) inline.unshift(nl);

          for (var i = 0; i < inline.length; i++) {
            var what = inline[i],
                is_str = typeof what == "string";
            if (is_str && add_to.length > 1 && typeof add_to[add_to.length - 1] == "string") {
              add_to[add_to.length - 1] += what;
            } else {
              add_to.push(what);
            }
          }
        }

        // contained means have an indent greater than the current one. On
        // *every* line in the block
        function get_contained_blocks(depth, blocks) {

          var re = new RegExp("^(" + indent_re + "{" + depth + "}.*?\\n?)*$"),
              replace = new RegExp("^" + indent_re + "{" + depth + "}", "gm"),
              ret = [];

          while (blocks.length > 0) {
            if (re.exec(blocks[0])) {
              var b = blocks.shift(),

              // Now remove that indent
              x = b.replace(replace, "");

              ret.push(mk_block(x, b.trailing, b.lineNumber));
            } else {
              break;
            }
          }
          return ret;
        }

        // passed to stack.forEach to turn list items up the stack into paras
        function paragraphify(s, i, stack) {
          var list = s.list;
          var last_li = list[list.length - 1];

          if (last_li[1] instanceof Array && last_li[1][0] == "para") {
            return;
          }
          if (i + 1 == stack.length) {
            // Last stack frame
            // Keep the same array, but replace the contents
            last_li.push(["para"].concat(last_li.splice(1, last_li.length - 1)));
          } else {
            var sublist = last_li.pop();
            last_li.push(["para"].concat(last_li.splice(1, last_li.length - 1)), sublist);
          }
        }

        // The matcher function
        return function (block, next) {
          var m = block.match(is_list_re);
          if (!m) return undefined;

          function make_list(m) {
            var list = bullet_list.exec(m[2]) ? ["bulletlist"] : ["numberlist"];

            stack.push({ list: list, indent: m[1] });
            return list;
          }

          var stack = [],
              // Stack of lists for nesting.
          list = make_list(m),
              last_li,
              loose = false,
              ret = [stack[0].list],
              i;

          // Loop to search over block looking for inner block elements and loose lists
          loose_search: while (true) {
            // Split into lines preserving new lines at end of line
            var lines = block.split(/(?=\n)/);

            // We have to grab all lines for a li and call processInline on them
            // once as there are some inline things that can span lines.
            var li_accumulate = "";

            // Loop over the lines in this block looking for tight lists.
            tight_search: for (var line_no = 0; line_no < lines.length; line_no++) {
              var nl = "",
                  l = lines[line_no].replace(/^\n/, function (n) {
                nl = n;return "";
              });

              // TODO: really should cache this
              var line_re = regex_for_depth(stack.length);

              m = l.match(line_re);
              //print( "line:", uneval(l), "\nline match:", uneval(m) );

              // We have a list item
              if (m[1] !== undefined) {
                // Process the previous list item, if any
                if (li_accumulate.length) {
                  add(last_li, loose, this.processInline(li_accumulate), nl);
                  // Loose mode will have been dealt with. Reset it
                  loose = false;
                  li_accumulate = "";
                }

                m[1] = expand_tab(m[1]);
                var wanted_depth = Math.floor(m[1].length / 4) + 1;
                //print( "want:", wanted_depth, "stack:", stack.length);
                if (wanted_depth > stack.length) {
                  // Deep enough for a nested list outright
                  //print ( "new nested list" );
                  list = make_list(m);
                  last_li.push(list);
                  last_li = list[1] = ["listitem"];
                } else {
                  // We aren't deep enough to be strictly a new level. This is
                  // where Md.pl goes nuts. If the indent matches a level in the
                  // stack, put it there, else put it one deeper then the
                  // wanted_depth deserves.
                  var found = false;
                  for (i = 0; i < stack.length; i++) {
                    if (stack[i].indent != m[1]) continue;
                    list = stack[i].list;
                    stack.splice(i + 1, stack.length - (i + 1));
                    found = true;
                    break;
                  }

                  if (!found) {
                    //print("not found. l:", uneval(l));
                    wanted_depth++;
                    if (wanted_depth <= stack.length) {
                      stack.splice(wanted_depth, stack.length - wanted_depth);
                      //print("Desired depth now", wanted_depth, "stack:", stack.length);
                      list = stack[wanted_depth - 1].list;
                      //print("list:", uneval(list) );
                    } else {
                      //print ("made new stack for messy indent");
                      list = make_list(m);
                      last_li.push(list);
                    }
                  }

                  //print( uneval(list), "last", list === stack[stack.length-1].list );
                  last_li = ["listitem"];
                  list.push(last_li);
                } // end depth of shenegains
                nl = "";
              }

              // Add content
              if (l.length > m[0].length) {
                li_accumulate += nl + l.substr(m[0].length);
              }
            } // tight_search

            if (li_accumulate.length) {
              add(last_li, loose, this.processInline(li_accumulate), nl);
              // Loose mode will have been dealt with. Reset it
              loose = false;
              li_accumulate = "";
            }

            // Look at the next block - we might have a loose list. Or an extra
            // paragraph for the current li
            var contained = get_contained_blocks(stack.length, next);

            // Deal with code blocks or properly nested lists
            if (contained.length > 0) {
              // Make sure all listitems up the stack are paragraphs
              forEach(stack, paragraphify, this);

              last_li.push.apply(last_li, this.toTree(contained, []));
            }

            var next_block = next[0] && next[0].valueOf() || "";

            if (next_block.match(is_list_re) || next_block.match(/^ /)) {
              block = next.shift();

              // Check for an HR following a list: features/lists/hr_abutting
              var hr = this.dialect.block.horizRule(block, next);

              if (hr) {
                ret.push.apply(ret, hr);
                break;
              }

              // Make sure all listitems up the stack are paragraphs
              forEach(stack, paragraphify, this);

              loose = true;
              continue loose_search;
            }
            break;
          } // loose_search

          return ret;
        };
      }(),

      blockquote: function blockquote(block, next) {
        if (!block.match(/^>/m)) return undefined;

        var jsonml = [];

        // separate out the leading abutting block, if any. I.e. in this case:
        //
        //  a
        //  > b
        //
        if (block[0] != ">") {
          var lines = block.split(/\n/),
              prev = [],
              line_no = block.lineNumber;

          // keep shifting lines until you find a crotchet
          while (lines.length && lines[0][0] != ">") {
            prev.push(lines.shift());
            line_no++;
          }

          var abutting = mk_block(prev.join("\n"), "\n", block.lineNumber);
          jsonml.push.apply(jsonml, this.processBlock(abutting, []));
          // reassemble new block of just block quotes!
          block = mk_block(lines.join("\n"), block.trailing, line_no);
        }

        // if the next block is also a blockquote merge it in
        while (next.length && next[0][0] == ">") {
          var b = next.shift();
          block = mk_block(block + block.trailing + b, b.trailing, block.lineNumber);
        }

        // Strip off the leading "> " and re-process as a block.
        var input = block.replace(/^> ?/gm, ""),
            old_tree = this.tree,
            processedBlock = this.toTree(input, ["blockquote"]),
            attr = extract_attr(processedBlock);

        // If any link references were found get rid of them
        if (attr && attr.references) {
          delete attr.references;
          // And then remove the attribute object if it's empty
          if (isEmpty(attr)) {
            processedBlock.splice(1, 1);
          }
        }

        jsonml.push(processedBlock);
        return jsonml;
      },

      referenceDefn: function referenceDefn(block, next) {
        var re = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
        // interesting matches are [ , ref_id, url, , title, title ]

        if (!block.match(re)) return undefined;

        // make an attribute node if it doesn't exist
        if (!extract_attr(this.tree)) {
          this.tree.splice(1, 0, {});
        }

        var attrs = extract_attr(this.tree);

        // make a references hash if it doesn't exist
        if (attrs.references === undefined) {
          attrs.references = {};
        }

        var b = this.loop_re_over_block(re, block, function (m) {

          if (m[2] && m[2][0] == "<" && m[2][m[2].length - 1] == ">") m[2] = m[2].substring(1, m[2].length - 1);

          var ref = attrs.references[m[1].toLowerCase()] = {
            href: m[2]
          };

          if (m[4] !== undefined) ref.title = m[4];else if (m[5] !== undefined) ref.title = m[5];
        });

        if (b.length) next.unshift(mk_block(b, block.trailing));

        return [];
      },

      para: function para(block, next) {
        // everything's a para!
        return [["para"].concat(this.processInline(block))];
      }
    }
  };

  Markdown.dialects.Gruber.inline = {

    __oneElement__: function oneElement(text, patterns_or_re, previous_nodes) {
      var m,
          res,
          lastIndex = 0;

      patterns_or_re = patterns_or_re || this.dialect.inline.__patterns__;
      var re = new RegExp("([\\s\\S]*?)(" + (patterns_or_re.source || patterns_or_re) + ")");

      m = re.exec(text);
      if (!m) {
        // Just boring text
        return [text.length, text];
      } else if (m[1]) {
        // Some un-interesting text matched. Return that first
        return [m[1].length, m[1]];
      }

      var res;
      if (m[2] in this.dialect.inline) {
        res = this.dialect.inline[m[2]].call(this, text.substr(m.index), m, previous_nodes || []);
      }
      // Default for now to make dev easier. just slurp special and output it.
      res = res || [m[2].length, m[2]];
      return res;
    },

    __call__: function inline(text, patterns) {

      var out = [],
          res;

      function add(x) {
        //D:self.debug("  adding output", uneval(x));
        if (typeof x == "string" && typeof out[out.length - 1] == "string") out[out.length - 1] += x;else out.push(x);
      }

      while (text.length > 0) {
        res = this.dialect.inline.__oneElement__.call(this, text, patterns, out);
        text = text.substr(res.shift());
        forEach(res, add);
      }

      return out;
    },

    // These characters are intersting elsewhere, so have rules for them so that
    // chunks of plain text blocks don't include them
    "]": function _() {},
    "}": function _() {},

    __escape__: /^\\[\\`\*_{}\[\]()#\+.!\-]/,

    "\\": function escaped(text) {
      // [ length of input processed, node/children to add... ]
      // Only esacape: \ ` * _ { } [ ] ( ) # * + - . !
      if (this.dialect.inline.__escape__.exec(text)) return [2, text.charAt(1)];else
        // Not an esacpe
        return [1, "\\"];
    },

    "![": function image(text) {

      // Unlike images, alt text is plain text only. no other elements are
      // allowed in there

      // ![Alt text](/path/to/img.jpg "Optional title")
      //      1          2            3       4         <--- captures
      var m = text.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);

      if (m) {
        if (m[2] && m[2][0] == "<" && m[2][m[2].length - 1] == ">") m[2] = m[2].substring(1, m[2].length - 1);

        m[2] = this.dialect.inline.__call__.call(this, m[2], /\\/)[0];

        var attrs = { alt: m[1], href: m[2] || "" };
        if (m[4] !== undefined) attrs.title = m[4];

        return [m[0].length, ["img", attrs]];
      }

      // ![Alt text][id]
      m = text.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/);

      if (m) {
        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion
        return [m[0].length, ["img_ref", { alt: m[1], ref: m[2].toLowerCase(), original: m[0] }]];
      }

      // Just consume the '!['
      return [2, "!["];
    },

    "[": function link(text) {

      var orig = String(text);
      // Inline content is possible inside `link text`
      var res = Markdown.DialectHelpers.inline_until_char.call(this, text.substr(1), "]");

      // No closing ']' found. Just consume the [
      if (!res) return [1, "["];

      var consumed = 1 + res[0],
          children = res[1],
          link,
          attrs;

      // At this point the first [...] has been parsed. See what follows to find
      // out which kind of link we are (reference or direct url)
      text = text.substr(consumed);

      // [link text](/path/to/img.jpg "Optional title")
      //                 1            2       3         <--- captures
      // This will capture up to the last paren in the block. We then pull
      // back based on if there a matching ones in the url
      //    ([here](/url/(test))
      // The parens have to be balanced
      var m = text.match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);
      if (m) {
        var url = m[1];
        consumed += m[0].length;

        if (url && url[0] == "<" && url[url.length - 1] == ">") url = url.substring(1, url.length - 1);

        // If there is a title we don't have to worry about parens in the url
        if (!m[3]) {
          var open_parens = 1; // One open that isn't in the capture
          for (var len = 0; len < url.length; len++) {
            switch (url[len]) {
              case "(":
                open_parens++;
                break;
              case ")":
                if (--open_parens == 0) {
                  consumed -= url.length - len;
                  url = url.substring(0, len);
                }
                break;
            }
          }
        }

        // Process escapes only
        url = this.dialect.inline.__call__.call(this, url, /\\/)[0];

        attrs = { href: url || "" };
        if (m[3] !== undefined) attrs.title = m[3];

        link = ["link", attrs].concat(children);
        return [consumed, link];
      }

      // [Alt text][id]
      // [Alt text] [id]
      m = text.match(/^\s*\[(.*?)\]/);

      if (m) {

        consumed += m[0].length;

        // [links][] uses links as its reference
        attrs = { ref: (m[1] || String(children)).toLowerCase(), original: orig.substr(0, consumed) };

        link = ["link_ref", attrs].concat(children);

        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion.
        // Store the original so that conversion can revert if the ref isn't found.
        return [consumed, link];
      }

      // [id]
      // Only if id is plain (no formatting.)
      if (children.length == 1 && typeof children[0] == "string") {

        attrs = { ref: children[0].toLowerCase(), original: orig.substr(0, consumed) };
        link = ["link_ref", attrs, children[0]];
        return [consumed, link];
      }

      // Just consume the "["
      return [1, "["];
    },

    "<": function autoLink(text) {
      var m;

      if ((m = text.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/)) != null) {
        if (m[3]) {
          return [m[0].length, ["link", { href: "mailto:" + m[3] }, m[3]]];
        } else if (m[2] == "mailto") {
          return [m[0].length, ["link", { href: m[1] }, m[1].substr("mailto:".length)]];
        } else return [m[0].length, ["link", { href: m[1] }, m[1]]];
      }

      return [1, "<"];
    },

    "`": function inlineCode(text) {
      // Inline code block. as many backticks as you like to start it
      // Always skip over the opening ticks.
      var m = text.match(/(`+)(([\s\S]*?)\1)/);

      if (m && m[2]) return [m[1].length + m[2].length, ["inlinecode", m[3]]];else {
        // TODO: No matching end code found - warn!
        return [1, "`"];
      }
    },

    "  \n": function lineBreak(text) {
      return [3, ["linebreak"]];
    }

  };

  // Meta Helper/generator method for em and strong handling
  function strong_em(tag, md) {

    var state_slot = tag + "_state",
        other_slot = tag == "strong" ? "em_state" : "strong_state";

    function CloseTag(len) {
      this.len_after = len;
      this.name = "close_" + md;
    }

    return function (text, orig_match) {

      if (this[state_slot][0] == md) {
        // Most recent em is of this type
        //D:this.debug("closing", md);
        this[state_slot].shift();

        // "Consume" everything to go back to the recrusion in the else-block below
        return [text.length, new CloseTag(text.length - md.length)];
      } else {
        // Store a clone of the em/strong states
        var other = this[other_slot].slice(),
            state = this[state_slot].slice();

        this[state_slot].unshift(md);

        //D:this.debug_indent += "  ";

        // Recurse
        var res = this.processInline(text.substr(md.length));
        //D:this.debug_indent = this.debug_indent.substr(2);

        var last = res[res.length - 1];

        //D:this.debug("processInline from", tag + ": ", uneval( res ) );

        var check = this[state_slot].shift();
        if (last instanceof CloseTag) {
          res.pop();
          // We matched! Huzzah.
          var consumed = text.length - last.len_after;
          return [consumed, [tag].concat(res)];
        } else {
          // Restore the state of the other kind. We might have mistakenly closed it.
          this[other_slot] = other;
          this[state_slot] = state;

          // We can't reuse the processed result as it could have wrong parsing contexts in it.
          return [md.length, md];
        }
      }
    }; // End returned function
  }

  Markdown.dialects.Gruber.inline["**"] = strong_em("strong", "**");
  Markdown.dialects.Gruber.inline["__"] = strong_em("strong", "__");
  Markdown.dialects.Gruber.inline["*"] = strong_em("em", "*");
  Markdown.dialects.Gruber.inline["_"] = strong_em("em", "_");

  // Build default order from insertion order.
  Markdown.buildBlockOrder = function (d) {
    var ord = [];
    for (var i in d) {
      if (i == "__order__" || i == "__call__") continue;
      ord.push(i);
    }
    d.__order__ = ord;
  };

  // Build patterns for inline matcher
  Markdown.buildInlinePatterns = function (d) {
    var patterns = [];

    for (var i in d) {
      // __foo__ is reserved and not a pattern
      if (i.match(/^__.*__$/)) continue;
      var l = i.replace(/([\\.*+?|()\[\]{}])/g, "\\$1").replace(/\n/, "\\n");
      patterns.push(i.length == 1 ? l : "(?:" + l + ")");
    }

    patterns = patterns.join("|");
    d.__patterns__ = patterns;
    //print("patterns:", uneval( patterns ) );

    var fn = d.__call__;
    d.__call__ = function (text, pattern) {
      if (pattern != undefined) {
        return fn.call(this, text, pattern);
      } else {
        return fn.call(this, text, patterns);
      }
    };
  };

  Markdown.DialectHelpers = {};
  Markdown.DialectHelpers.inline_until_char = function (text, want) {
    var consumed = 0,
        nodes = [];

    while (true) {
      if (text.charAt(consumed) == want) {
        // Found the character we were looking for
        consumed++;
        return [consumed, nodes];
      }

      if (consumed >= text.length) {
        // No closing char found. Abort.
        return null;
      }

      var res = this.dialect.inline.__oneElement__.call(this, text.substr(consumed));
      consumed += res[0];
      // Add any returned nodes.
      nodes.push.apply(nodes, res.slice(1));
    }
  };

  // Helper function to make sub-classing a dialect easier
  Markdown.subclassDialect = function (d) {
    function Block() {}
    Block.prototype = d.block;
    function Inline() {}
    Inline.prototype = d.inline;

    return { block: new Block(), inline: new Inline() };
  };

  Markdown.buildBlockOrder(Markdown.dialects.Gruber.block);
  Markdown.buildInlinePatterns(Markdown.dialects.Gruber.inline);

  Markdown.dialects.Maruku = Markdown.subclassDialect(Markdown.dialects.Gruber);

  Markdown.dialects.Maruku.processMetaHash = function processMetaHash(meta_string) {
    var meta = split_meta_hash(meta_string),
        attr = {};

    for (var i = 0; i < meta.length; ++i) {
      // id: #foo
      if (/^#/.test(meta[i])) {
        attr.id = meta[i].substring(1);
      }
      // class: .foo
      else if (/^\./.test(meta[i])) {
          // if class already exists, append the new one
          if (attr["class"]) {
            attr["class"] = attr["class"] + meta[i].replace(/./, " ");
          } else {
            attr["class"] = meta[i].substring(1);
          }
        }
        // attribute: foo=bar
        else if (/\=/.test(meta[i])) {
            var s = meta[i].split(/\=/);
            attr[s[0]] = s[1];
          }
    }

    return attr;
  };

  function split_meta_hash(meta_string) {
    var meta = meta_string.split(""),
        parts = [""],
        in_quotes = false;

    while (meta.length) {
      var letter = meta.shift();
      switch (letter) {
        case " ":
          // if we're in a quoted section, keep it
          if (in_quotes) {
            parts[parts.length - 1] += letter;
          }
          // otherwise make a new part
          else {
              parts.push("");
            }
          break;
        case "'":
        case '"':
          // reverse the quotes and move straight on
          in_quotes = !in_quotes;
          break;
        case "\\":
          // shift off the next letter to be used straight away.
          // it was escaped so we'll keep it whatever it is
          letter = meta.shift();
        default:
          parts[parts.length - 1] += letter;
          break;
      }
    }

    return parts;
  }

  Markdown.dialects.Maruku.block.document_meta = function document_meta(block, next) {
    // we're only interested in the first block
    if (block.lineNumber > 1) return undefined;

    // document_meta blocks consist of one or more lines of `Key: Value\n`
    if (!block.match(/^(?:\w+:.*\n)*\w+:.*$/)) return undefined;

    // make an attribute node if it doesn't exist
    if (!extract_attr(this.tree)) {
      this.tree.splice(1, 0, {});
    }

    var pairs = block.split(/\n/);
    for (p in pairs) {
      var m = pairs[p].match(/(\w+):\s*(.*)$/),
          key = m[1].toLowerCase(),
          value = m[2];

      this.tree[1][key] = value;
    }

    // document_meta produces no content!
    return [];
  };

  Markdown.dialects.Maruku.block.block_meta = function block_meta(block, next) {
    // check if the last line of the block is an meta hash
    var m = block.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);
    if (!m) return undefined;

    // process the meta hash
    var attr = this.dialect.processMetaHash(m[2]);

    var hash;

    // if we matched ^ then we need to apply meta to the previous block
    if (m[1] === "") {
      var node = this.tree[this.tree.length - 1];
      hash = extract_attr(node);

      // if the node is a string (rather than JsonML), bail
      if (typeof node === "string") return undefined;

      // create the attribute hash if it doesn't exist
      if (!hash) {
        hash = {};
        node.splice(1, 0, hash);
      }

      // add the attributes in
      for (a in attr) {
        hash[a] = attr[a];
      }

      // return nothing so the meta hash is removed
      return [];
    }

    // pull the meta hash off the block and process what's left
    var b = block.replace(/\n.*$/, ""),
        result = this.processBlock(b, []);

    // get or make the attributes hash
    hash = extract_attr(result[0]);
    if (!hash) {
      hash = {};
      result[0].splice(1, 0, hash);
    }

    // attach the attributes to the block
    for (a in attr) {
      hash[a] = attr[a];
    }

    return result;
  };

  Markdown.dialects.Maruku.block.definition_list = function definition_list(block, next) {
    // one or more terms followed by one or more definitions, in a single block
    var tight = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
        list = ["dl"],
        i,
        m;

    // see if we're dealing with a tight or loose block
    if (m = block.match(tight)) {
      // pull subsequent tight DL blocks out of `next`
      var blocks = [block];
      while (next.length && tight.exec(next[0])) {
        blocks.push(next.shift());
      }

      for (var b = 0; b < blocks.length; ++b) {
        var m = blocks[b].match(tight),
            terms = m[1].replace(/\n$/, "").split(/\n/),
            defns = m[2].split(/\n:\s+/);

        // print( uneval( m ) );

        for (i = 0; i < terms.length; ++i) {
          list.push(["dt", terms[i]]);
        }

        for (i = 0; i < defns.length; ++i) {
          // run inline processing over the definition
          list.push(["dd"].concat(this.processInline(defns[i].replace(/(\n)\s+/, "$1"))));
        }
      }
    } else {
      return undefined;
    }

    return [list];
  };

  // splits on unescaped instances of @ch. If @ch is not a character the result
  // can be unpredictable

  Markdown.dialects.Maruku.block.table = function table(block, next) {

    var _split_on_unescaped = function _split_on_unescaped(s, ch) {
      ch = ch || '\\s';
      if (ch.match(/^[\\|\[\]{}?*.+^$]$/)) {
        ch = '\\' + ch;
      }
      var res = [],
          r = new RegExp('^((?:\\\\.|[^\\\\' + ch + '])*)' + ch + '(.*)'),
          m;
      while (m = s.match(r)) {
        res.push(m[1]);
        s = m[2];
      }
      res.push(s);
      return res;
    };

    var leading_pipe = /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,

    // find at least an unescaped pipe in each line
    no_leading_pipe = /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,
        i,
        m;
    if (m = block.match(leading_pipe)) {
      // remove leading pipes in contents
      // (header and horizontal rule already have the leading pipe left out)
      m[3] = m[3].replace(/^\s*\|/gm, '');
    } else if (!(m = block.match(no_leading_pipe))) {
      return undefined;
    }

    var table = ["table", ["thead", ["tr"]], ["tbody"]];

    // remove trailing pipes, then split on pipes
    // (no escaped pipes are allowed in horizontal rule)
    m[2] = m[2].replace(/\|\s*$/, '').split('|');

    // process alignment
    var html_attrs = [];
    forEach(m[2], function (s) {
      if (s.match(/^\s*-+:\s*$/)) html_attrs.push({ align: "right" });else if (s.match(/^\s*:-+\s*$/)) html_attrs.push({ align: "left" });else if (s.match(/^\s*:-+:\s*$/)) html_attrs.push({ align: "center" });else html_attrs.push({});
    });

    // now for the header, avoid escaped pipes
    m[1] = _split_on_unescaped(m[1].replace(/\|\s*$/, ''), '|');
    for (i = 0; i < m[1].length; i++) {
      table[1][1].push(['th', html_attrs[i] || {}].concat(this.processInline(m[1][i].trim())));
    }

    // now for body contents
    forEach(m[3].replace(/\|\s*$/mg, '').split('\n'), function (row) {
      var html_row = ['tr'];
      row = _split_on_unescaped(row, '|');
      for (i = 0; i < row.length; i++) {
        html_row.push(['td', html_attrs[i] || {}].concat(this.processInline(row[i].trim())));
      }
      table[2].push(html_row);
    }, this);

    return [table];
  };

  Markdown.dialects.Maruku.inline["{:"] = function inline_meta(text, matches, out) {
    if (!out.length) {
      return [2, "{:"];
    }

    // get the preceeding element
    var before = out[out.length - 1];

    if (typeof before === "string") {
      return [2, "{:"];
    }

    // match a meta hash
    var m = text.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);

    // no match, false alarm
    if (!m) {
      return [2, "{:"];
    }

    // attach the attributes to the preceeding element
    var meta = this.dialect.processMetaHash(m[1]),
        attr = extract_attr(before);

    if (!attr) {
      attr = {};
      before.splice(1, 0, attr);
    }

    for (var k in meta) {
      attr[k] = meta[k];
    }

    // cut out the string and replace it with nothing
    return [m[0].length, ""];
  };

  Markdown.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/;

  Markdown.buildBlockOrder(Markdown.dialects.Maruku.block);
  Markdown.buildInlinePatterns(Markdown.dialects.Maruku.inline);

  var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) == "[object Array]";
  };

  var forEach;
  // Don't mess with Array.prototype. Its not friendly
  if (Array.prototype.forEach) {
    forEach = function forEach(arr, cb, thisp) {
      return arr.forEach(cb, thisp);
    };
  } else {
    forEach = function forEach(arr, cb, thisp) {
      for (var i = 0; i < arr.length; i++) {
        cb.call(thisp || arr, arr[i], i, arr);
      }
    };
  }

  var isEmpty = function isEmpty(obj) {
    for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) {
        return false;
      }
    }

    return true;
  };

  function extract_attr(jsonml) {
    return isArray(jsonml) && jsonml.length > 1 && _typeof(jsonml[1]) === "object" && !isArray(jsonml[1]) ? jsonml[1] : undefined;
  }

  /**
   *  renderJsonML( jsonml[, options] ) -> String
   *  - jsonml (Array): JsonML array to render to XML
   *  - options (Object): options
   *
   *  Converts the given JsonML into well-formed XML.
   *
   *  The options currently understood are:
   *
   *  - root (Boolean): wether or not the root node should be included in the
   *    output, or just its children. The default `false` is to not include the
   *    root itself.
   */
  expose.renderJsonML = function (jsonml, options) {
    options = options || {};
    // include the root element in the rendered output?
    options.root = options.root || false;

    var content = [];

    if (options.root) {
      content.push(render_tree(jsonml));
    } else {
      jsonml.shift(); // get rid of the tag
      if (jsonml.length && _typeof(jsonml[0]) === "object" && !(jsonml[0] instanceof Array)) {
        jsonml.shift(); // get rid of the attributes
      }

      while (jsonml.length) {
        content.push(render_tree(jsonml.shift()));
      }
    }

    return content.join("\n\n");
  };

  function escapeHTML(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function render_tree(jsonml) {
    // basic case
    if (typeof jsonml === "string") {
      return escapeHTML(jsonml);
    }

    var tag = jsonml.shift(),
        attributes = {},
        content = [];

    if (jsonml.length && _typeof(jsonml[0]) === "object" && !(jsonml[0] instanceof Array)) {
      attributes = jsonml.shift();
    }

    while (jsonml.length) {
      content.push(render_tree(jsonml.shift()));
    }

    var tag_attrs = "";
    for (var a in attributes) {
      tag_attrs += " " + a + '="' + escapeHTML(attributes[a]) + '"';
    }

    // be careful about adding whitespace here for inline elements
    if (tag == "img" || tag == "br" || tag == "hr") {
      return "<" + tag + tag_attrs + "/>";
    } else {
      return "<" + tag + tag_attrs + ">" + content.join("") + "</" + tag + ">";
    }
  }

  function convert_tree_to_html(tree, references, options) {
    var i;
    options = options || {};

    // shallow clone
    var jsonml = tree.slice(0);

    if (typeof options.preprocessTreeNode === "function") {
      jsonml = options.preprocessTreeNode(jsonml, references);
    }

    // Clone attributes if they exist
    var attrs = extract_attr(jsonml);
    if (attrs) {
      jsonml[1] = {};
      for (i in attrs) {
        jsonml[1][i] = attrs[i];
      }
      attrs = jsonml[1];
    }

    // basic case
    if (typeof jsonml === "string") {
      return jsonml;
    }

    // convert this node
    switch (jsonml[0]) {
      case "header":
        jsonml[0] = "h" + jsonml[1].level;
        delete jsonml[1].level;
        break;
      case "bulletlist":
        jsonml[0] = "ul";
        break;
      case "numberlist":
        jsonml[0] = "ol";
        break;
      case "listitem":
        jsonml[0] = "li";
        break;
      case "para":
        jsonml[0] = "p";
        break;
      case "markdown":
        jsonml[0] = "html";
        if (attrs) delete attrs.references;
        break;
      case "code_block":
        jsonml[0] = "pre";
        i = attrs ? 2 : 1;
        var code = ["code"];
        code.push.apply(code, jsonml.splice(i, jsonml.length - i));
        jsonml[i] = code;
        break;
      case "inlinecode":
        jsonml[0] = "code";
        break;
      case "img":
        jsonml[1].src = jsonml[1].href;
        delete jsonml[1].href;
        break;
      case "linebreak":
        jsonml[0] = "br";
        break;
      case "link":
        jsonml[0] = "a";
        break;
      case "link_ref":
        jsonml[0] = "a";

        // grab this ref and clean up the attribute node
        var ref = references[attrs.ref];

        // if the reference exists, make the link
        if (ref) {
          delete attrs.ref;

          // add in the href and title, if present
          attrs.href = ref.href;
          if (ref.title) {
            attrs.title = ref.title;
          }

          // get rid of the unneeded original text
          delete attrs.original;
        }
        // the reference doesn't exist, so revert to plain text
        else {
            return attrs.original;
          }
        break;
      case "img_ref":
        jsonml[0] = "img";

        // grab this ref and clean up the attribute node
        var ref = references[attrs.ref];

        // if the reference exists, make the link
        if (ref) {
          delete attrs.ref;

          // add in the href and title, if present
          attrs.src = ref.href;
          if (ref.title) {
            attrs.title = ref.title;
          }

          // get rid of the unneeded original text
          delete attrs.original;
        }
        // the reference doesn't exist, so revert to plain text
        else {
            return attrs.original;
          }
        break;
    }

    // convert all the children
    i = 1;

    // deal with the attribute node, if it exists
    if (attrs) {
      // if there are keys, skip over it
      for (var key in jsonml[1]) {
        i = 2;
        break;
      }
      // if there aren't, remove it
      if (i === 1) {
        jsonml.splice(i, 1);
      }
    }

    for (; i < jsonml.length; ++i) {
      jsonml[i] = convert_tree_to_html(jsonml[i], references, options);
    }

    return jsonml;
  }

  // merges adjacent text nodes into a single node
  function merge_text_nodes(jsonml) {
    // skip the tag name and attribute hash
    var i = extract_attr(jsonml) ? 2 : 1;

    while (i < jsonml.length) {
      // if it's a string check the next item too
      if (typeof jsonml[i] === "string") {
        if (i + 1 < jsonml.length && typeof jsonml[i + 1] === "string") {
          // merge the second string into the first and remove it
          jsonml[i] += jsonml.splice(i + 1, 1)[0];
        } else {
          ++i;
        }
      }
      // if it's not a string recurse
      else {
          merge_text_nodes(jsonml[i]);
          ++i;
        }
    }
  }
})(function () {
  if (false) {
    window.markdown = {};
    return window.markdown;
  } else {
    return exports;
  }
}());

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var EventEmitter = __webpack_require__(28).EventEmitter,
    queryString = __webpack_require__(26);

function tryParseJson(data) {
    try {
        return JSON.parse(data);
    } catch (error) {
        return error;
    }
}

function timeout() {
    this.request.abort();
    this.emit('timeout');
}

function Ajax(settings) {
    var queryStringData,
        ajax = this;

    if (typeof settings === 'string') {
        settings = {
            url: settings
        };
    }

    if ((typeof settings === 'undefined' ? 'undefined' : _typeof(settings)) !== 'object') {
        settings = {};
    }

    ajax.settings = settings;
    ajax.request = new XMLHttpRequest();
    ajax.settings.method = ajax.settings.method || 'get';

    if (ajax.settings.cors && !'withCredentials' in ajax.request) {
        if (typeof XDomainRequest !== 'undefined') {
            // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
            ajax.request = new XDomainRequest();
        } else {
            // Otherwise, CORS is not supported by the browser.
            ajax.emit('error', new Error('Cors is not supported by this browser'));
        }
    }

    if (ajax.settings.cache === false) {
        ajax.settings.data = ajax.settings.data || {};
        ajax.settings.data._ = new Date().getTime();
    }

    if (ajax.settings.method.toLowerCase() === 'get' && _typeof(ajax.settings.data) === 'object') {
        var urlParts = ajax.settings.url.split('?');

        queryStringData = queryString.parse(urlParts[1]);

        for (var key in ajax.settings.data) {
            queryStringData[key] = ajax.settings.data[key];
        }

        var parsedQueryStringData = queryString.stringify(queryStringData);

        ajax.settings.url = urlParts[0] + (parsedQueryStringData ? '?' + parsedQueryStringData : '');
        ajax.settings.data = null;
    }

    ajax.request.addEventListener('progress', function (event) {
        ajax.emit('progress', event);
    }, false);

    ajax.request.addEventListener('load', function (event) {
        var data = event.target.responseText;

        if (ajax.settings.dataType && ajax.settings.dataType.toLowerCase() === 'json') {
            if (data === '') {
                data = undefined;
            } else {
                data = tryParseJson(data);
                if (data instanceof Error) {
                    ajax.emit('error', event, data);
                    return;
                }
            }
        }

        if (event.target.status >= 400) {
            ajax.emit('error', event, data);
        } else {
            ajax.emit('success', event, data);
        }
    }, false);

    ajax.request.addEventListener('error', function (event) {
        ajax.emit('error', event);
    }, false);

    ajax.request.addEventListener('abort', function (event) {
        ajax.emit('error', event, new Error('Connection Aborted'));
        ajax.emit('abort', event);
    }, false);

    ajax.request.addEventListener('loadend', function (event) {
        clearTimeout(ajax._requestTimeout);
        ajax.emit('complete', event);
    }, false);

    ajax.request.open(ajax.settings.method || 'get', ajax.settings.url, true);

    if (ajax.settings.cors && 'withCredentials' in ajax.request) {
        ajax.request.withCredentials = !!settings.withCredentials;
    }

    // Set default headers
    if (ajax.settings.contentType !== false) {
        ajax.request.setRequestHeader('Content-Type', ajax.settings.contentType || 'application/json; charset=utf-8');
    }
    if (ajax.settings.requestedWith !== false) {
        ajax.request.setRequestHeader('X-Requested-With', ajax.settings.requestedWith || 'XMLHttpRequest');
    }
    if (ajax.settings.auth) {
        ajax.request.setRequestHeader('Authorization', ajax.settings.auth);
    }

    // Set custom headers
    for (var headerKey in ajax.settings.headers) {
        ajax.request.setRequestHeader(headerKey, ajax.settings.headers[headerKey]);
    }

    if (ajax.settings.processData !== false && ajax.settings.dataType === 'json') {
        ajax.settings.data = JSON.stringify(ajax.settings.data);
    }
}

Ajax.prototype = Object.create(EventEmitter.prototype);

Ajax.prototype.send = function () {
    var ajax = this;

    ajax._requestTimeout = setTimeout(function () {
        timeout.apply(ajax, []);
    }, ajax.settings.timeout || 120000);

    ajax.request.send(ajax.settings.data && ajax.settings.data);
};

module.exports = Ajax;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

/*!
	query-string
	Parse and stringify URL query strings
	https://github.com/sindresorhus/query-string
	by Sindre Sorhus
	MIT License
*/
(function () {
	'use strict';

	var queryString = {};

	queryString.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}

		str = str.trim().replace(/^(\?|#)/, '');

		if (!str) {
			return {};
		}

		return str.trim().split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			var key = parts[0];
			var val = parts[1];

			key = decodeURIComponent(key);
			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}

			return ret;
		}, {});
	};

	queryString.stringify = function (obj) {
		return obj ? Object.keys(obj).map(function (key) {
			var val = obj[key];

			if (Array.isArray(val)) {
				return val.map(function (val2) {
					return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
				}).join('&');
			}

			return encodeURIComponent(key) + '=' + encodeURIComponent(val);
		}).join('&') : '';
	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return queryString;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = queryString;
	} else {
		self.queryString = queryString;
	}
})();

/***/ },
/* 27 */
/***/ function(module, exports) {

"use strict";
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ },
/* 28 */
/***/ function(module, exports) {

"use strict";
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function (n) {
  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function (type) {
  var er, handler, len, args, i, listeners;

  if (!this._events) this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler)) return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++) {
      listeners[i].apply(this, args);
    }
  }

  return true;
};

EventEmitter.prototype.addListener = function (type, listener) {
  var m;

  if (!isFunction(listener)) throw TypeError('listener must be a function');

  if (!this._events) this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function (type, listener) {
  if (!isFunction(listener)) throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function (type, listener) {
  var list, position, length, i;

  if (!isFunction(listener)) throw TypeError('listener must be a function');

  if (!this._events || !this._events[type]) return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener || isFunction(list.listener) && list.listener === listener) {
    delete this._events[type];
    if (this._events.removeListener) this.emit('removeListener', type, listener);
  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener) this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function (type) {
  var key, listeners;

  if (!this._events) return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length) {
      this.removeListener(type, listeners[listeners.length - 1]);
    }
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function (type) {
  var ret;
  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function (type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function (emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

/***/ },
/* 29 */
/***/ function(module, exports) {

"use strict";
'use strict';

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ },
/* 30 */
/***/ function(module, exports) {

"use strict";
'use strict';

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function TempCtor() {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

/***/ },
/* 31 */
/***/ function(module, exports) {

"use strict";
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

module.exports = function isBuffer(arg) {
  return arg && (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s':
        return String(args[i++]);
      case '%d':
        return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};

// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function (fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;
exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }
  return debugs[set];
};

/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;

// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};

  array.forEach(function (val, idx) {
    hash[val] = true;
  });

  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) &&
  // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect &&
  // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(31);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}

// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};

/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(30);

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27), __webpack_require__(29)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./Access-Control.md": 2,
	"./Balancing.md": 3,
	"./Configuration.md": 4,
	"./Discovery.md": 5,
	"./Docker---Swarm-Balancing.md": 6,
	"./ElasticSearch-cluster-with-Exec-discovery.md": 7,
	"./Healthchecks.md": 8,
	"./Home.md": 9,
	"./Installation.md": 10,
	"./Introduction.md": 0,
	"./Performance-tests.md": 11,
	"./REST-API.md": 12,
	"./SRV-Balancing.md": 13,
	"./Service-balancing-with-Consul-discovery-and-Docker-Registrator.md": 14,
	"./Static-balancing.md": 15,
	"./TLS-Termination.md": 16,
	"./Windows-specific-notes.md": 17,
	"./_Sidebar.md": 1
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 33;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _particles = __webpack_require__(18);

var _particles2 = _interopRequireDefault(_particles);

__webpack_require__(19);

__webpack_require__(20);

__webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(22);

var particlesJs = document.getElementById('particles-js');
var headeSection = document.getElementsByClassName('header-section');
var headerHeight = document.getElementsByTagName('header')[0].offsetHeight;
var currentScrollTop = document.body.scrollTop;
var previusScrollTop = currentScrollTop;

if (particlesJs) {
    _particles2.default.particlesJS.load('particles-js', './particlesjs-config.json', function () {
        console.log('callback - particles-js config loaded');
    });
}

if (headeSection.length) {
    window.addEventListener("scroll", function () {
        currentScrollTop = document.body.scrollTop;

        if (!currentScrollTop) {
            document.body.className = "";
        } else if (currentScrollTop - previusScrollTop > 0 && currentScrollTop > headerHeight) {
            document.body.className = "hide-header";
        } else if (currentScrollTop - previusScrollTop < 0) {
            document.body.className = "show-header";
        }

        previusScrollTop = currentScrollTop;
    });
}

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map