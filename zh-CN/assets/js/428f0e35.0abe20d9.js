"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[2226],{37690:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var a=t(86070),r=t(76113),s=t(60630),i=t(24990);const c={id:"es",title:"Elasticsearch Connector",sidebar_position:5},l=void 0,o={id:"framework/connector/es",title:"Elasticsearch Connector",description:"Elasticsearch \u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u3001RESTful \u98ce\u683c\u7684\u641c\u7d22\u548c\u6570\u636e\u5206\u6790\u5f15\u64ce\u3002Apache Flink \u5b98\u65b9\u63d0\u4f9b\u4e86 Elasticsearch \u7684\u8fde\u63a5\u5668\uff0c\u7528\u4e8e\u5411 ElasticSearch \u4e2d\u5199\u5165\u6570\u636e,\u53ef\u63d0\u4f9b \u81f3\u5c11\u4e00\u6b21 \u7684\u5904\u7406\u8bed\u4e49\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/framework/connector/5.es.md",sourceDirName:"framework/connector",slug:"/framework/connector/es",permalink:"/zh-CN/docs/framework/connector/es",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/framework/connector/5.es.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"es",title:"Elasticsearch Connector",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Apache Doris Connector",permalink:"/zh-CN/docs/framework/connector/doris"},next:{title:"Apache HBase Connector",permalink:"/zh-CN/docs/framework/connector/hbase"}},d={},u=[{value:"Elasticsearch \u5199\u5165\u4f9d\u8d56",id:"elasticsearch-\u5199\u5165\u4f9d\u8d56",level:2},{value:"\u57fa\u4e8e\u5b98\u7f51\u7684Elasticsearch\u5199\u5165\u6570\u636e",id:"\u57fa\u4e8e\u5b98\u7f51\u7684elasticsearch\u5199\u5165\u6570\u636e",level:2},{value:"Apache StreamPark\u2122 \u5199\u5165 Elasticsearch",id:"apache-streampark-\u5199\u5165-elasticsearch",level:2},{value:"1. \u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f",id:"1-\u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f",level:3},{value:"2. \u5199\u5165Elasticsearch",id:"2-\u5199\u5165elasticsearch",level:3},{value:"\u5176\u4ed6\u914d\u7f6e",id:"\u5176\u4ed6\u914d\u7f6e",level:2},{value:"\u5904\u7406\u5931\u8d25\u7684 Elasticsearch \u8bf7\u6c42",id:"\u5904\u7406\u5931\u8d25\u7684-elasticsearch-\u8bf7\u6c42",level:3},{value:"\u914d\u7f6e\u5185\u90e8\u6279\u91cf\u5904\u7406\u5668",id:"\u914d\u7f6e\u5185\u90e8\u6279\u91cf\u5904\u7406\u5668",level:3},{value:"Apache StreamPark\u2122\u914d\u7f6e",id:"apache-streampark\u914d\u7f6e",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://www.elastic.co/cn/elasticsearch/",children:"Elasticsearch"})," \u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u3001RESTful \u98ce\u683c\u7684\u641c\u7d22\u548c\u6570\u636e\u5206\u6790\u5f15\u64ce\u3002",(0,a.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/",children:"Apache Flink \u5b98\u65b9"}),"\u63d0\u4f9b\u4e86 ",(0,a.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/datastream/elasticsearch/",children:"Elasticsearch"})," \u7684\u8fde\u63a5\u5668\uff0c\u7528\u4e8e\u5411 ElasticSearch \u4e2d\u5199\u5165\u6570\u636e,\u53ef\u63d0\u4f9b ",(0,a.jsx)(n.strong,{children:"\u81f3\u5c11\u4e00\u6b21"})," \u7684\u5904\u7406\u8bed\u4e49\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"ElasticsearchSink \u4f7f\u7528 TransportClient\uff086.x \u4e4b\u524d\uff09\u6216\u8005 RestHighLevelClient\uff086.x \u5f00\u59cb\uff09\u548c Elasticsearch \u96c6\u7fa4\u8fdb\u884c\u901a\u4fe1\uff0cApache StreamPark \u5bf9 flink-connector-elasticsearch6 \u8fdb\u4e00\u6b65\u5c01\u88c5\uff0c\u5c4f\u853d\u5f00\u53d1\u7ec6\u8282\uff0c\u7b80\u5316 Elasticsearch6 \u53ca\u4ee5\u4e0a\u7684\u5199\u5165\u64cd\u4f5c\u3002"}),"\n",(0,a.jsx)(n.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,a.jsxs)(n.p,{children:["\u56e0\u4e3a Flink Connector Elasticsearch \u4e0d\u540c\u7248\u672c\u4e4b\u95f4\u5b58\u5728\u51b2\u7a81\uff0cStreamPark \u6682\u65f6\u4ec5\u652f\u6301 Elasticsearch6 \u53ca\u4ee5\u4e0a\u7684\u5199\u5165\u64cd\u4f5c\uff0c\u5982\u9700\u5199\u5165 Elasticsearch5 \u96c6\u7fa4\uff0c\u9700\u8981\u4f7f\u7528\u8005\u6392\u9664 ",(0,a.jsx)(n.code,{children:"flink-connector-elasticsearch6"})," \u4f9d\u8d56\uff0c\u5f15\u5165 ",(0,a.jsx)(n.code,{children:"flink-connector-elasticsearch5"})," \u4f9d\u8d56\u3002\u521b\u5efa ",(0,a.jsx)(n.code,{children:"org.apache.flink.streaming.connectors.elasticsearch5.ElasticsearchSink"})," \u5b9e\u4f8b\u5199\u5165\u6570\u636e\u3002"]})}),"\n",(0,a.jsx)(n.h2,{id:"elasticsearch-\u5199\u5165\u4f9d\u8d56",children:"Elasticsearch \u5199\u5165\u4f9d\u8d56"}),"\n",(0,a.jsxs)(n.p,{children:["Elasticsearch \u7248\u672c\u4e0d\u540c\u4f9d\u8d56 Flink Connector Elasticsearch \u4e0d\u540c,\u4ee5\u4e0b\u4fe1\u606f\u6765\u6e90",(0,a.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/connectors/datastream/elasticsearch/",children:"flink-docs-release-1.14\u6587\u6863"}),":\nElasticsearch 5.x Maven\u4f9d\u8d56"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-connector-elasticsearch5_2.11</artifactId>\n    <version>1.14.3</version>\n</dependency>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Elasticsearch 6.x Maven\u4f9d\u8d56"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-connector-elasticsearch6_2.11</artifactId>\n    <version>1.14.3</version>\n</dependency>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Elasticsearch 7.x\u53ca\u4ee5\u4e0a Maven\u4f9d\u8d56"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-connector-elasticsearch7_2.11</artifactId>\n    <version>1.14.3</version>\n</dependency>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u57fa\u4e8e\u5b98\u7f51\u7684elasticsearch\u5199\u5165\u6570\u636e",children:"\u57fa\u4e8e\u5b98\u7f51\u7684Elasticsearch\u5199\u5165\u6570\u636e"}),"\n",(0,a.jsxs)(n.p,{children:["\u4ee5\u4e0b\u4ee3\u7801\u6458\u81ea",(0,a.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/datastream/elasticsearch/#elasticsearch-sink",children:"\u5b98\u65b9\u6587\u6863"})]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"java, Elasticsearch 6.x \u53ca\u4ee5\u4e0a",java:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import org.apache.flink.api.common.functions.RuntimeContext;\nimport org.apache.flink.streaming.api.datastream.DataStream;\nimport org.apache.flink.streaming.connectors.elasticsearch.ElasticsearchSinkFunction;\nimport org.apache.flink.streaming.connectors.elasticsearch.RequestIndexer;\nimport org.apache.flink.streaming.connectors.elasticsearch6.ElasticsearchSink;\n\nimport org.apache.http.HttpHost;\nimport org.elasticsearch.action.index.IndexRequest;\nimport org.elasticsearch.client.Requests;\n\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\n\nDataStream<String> input = ...;\n\nList<HttpHost> httpHosts = new ArrayList<>();\nhttpHosts.add(new HttpHost("127.0.0.1", 9200, "http"));\nhttpHosts.add(new HttpHost("10.2.3.1", 9200, "http"));\n\n// \u4f7f\u7528 ElasticsearchSink.Builder \u521b\u5efa ElasticsearchSink\nElasticsearchSink.Builder<String> esSinkBuilder = new ElasticsearchSink.Builder<>(\n    httpHosts,\n    new ElasticsearchSinkFunction<String>() {\n        public IndexRequest createIndexRequest(String element) {\n            Map<String, String> json = new HashMap<>();\n            json.put("data", element);\n\n            return Requests.indexRequest()\n                    .index("my-index")\n                    .type("my-type")\n                    .source(json);\n        }\n\n        @Override\n        public void process(String element, RuntimeContext ctx, RequestIndexer indexer) {\n            indexer.add(createIndexRequest(element));\n        }\n    }\n);\n\n// \u6279\u91cf\u8bf7\u6c42\u7684\u914d\u7f6e\uff1b\u4e0b\u9762\u7684\u8bbe\u7f6e\u4f7f sink \u5728\u63a5\u6536\u6bcf\u4e2a\u5143\u7d20\u4e4b\u540e\u7acb\u5373\u63d0\u4ea4\uff0c\u5426\u5219\u8fd9\u4e9b\u5143\u7d20\u5c06\u88ab\u7f13\u5b58\u8d77\u6765\nesSinkBuilder.setBulkFlushMaxActions(1);\n\n// \u4e3a\u5185\u90e8\u521b\u5efa\u7684 REST \u5ba2\u6237\u7aef\u63d0\u4f9b\u4e00\u4e2a\u81ea\u5b9a\u4e49\u914d\u7f6e\u4fe1\u606f\u7684 RestClientFactory\nesSinkBuilder.setRestClientFactory(\n  restClientBuilder -> {\n    restClientBuilder.setDefaultHeaders(...)\n    restClientBuilder.setMaxRetryTimeoutMillis(...)\n    restClientBuilder.setPathPrefix(...)\n    restClientBuilder.setHttpClientConfigCallback(...)\n  }\n);\n\n// \u6700\u540e\uff0c\u6784\u5efa\u5e76\u6dfb\u52a0 sink \u5230\u4f5c\u4e1a\u7ba1\u9053\u4e2d\ninput.addSink(esSinkBuilder.build());\n'})})}),(0,a.jsx)(i.A,{value:"scala, Elasticsearch 6.x \u53ca\u4ee5\u4e0a",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'\nimport org.apache.flink.api.common.functions.RuntimeContext\nimport org.apache.flink.streaming.api.datastream.DataStream\nimport org.apache.flink.streaming.connectors.elasticsearch.ElasticsearchSinkFunction\nimport org.apache.flink.streaming.connectors.elasticsearch.RequestIndexer\nimport org.apache.flink.streaming.connectors.elasticsearch6.ElasticsearchSink\n\nimport org.apache.http.HttpHost\nimport org.elasticsearch.action.index.IndexRequest\nimport org.elasticsearch.client.Requests\n\nimport java.util.ArrayList\nimport java.util.List\n\nval input: DataStream[String] = ...\n\nval httpHosts = new java.util.ArrayList[HttpHost]\nhttpHosts.add(new HttpHost("127.0.0.1", 9200, "http"))\nhttpHosts.add(new HttpHost("10.2.3.1", 9200, "http"))\n\nval esSinkBuilder = new ElasticsearchSink.Builder[String](\n  httpHosts,\n  new ElasticsearchSinkFunction[String] {\n     def process(element: String, ctx: RuntimeContext, indexer: RequestIndexer) {\n          val json = new java.util.HashMap[String, String]\n          json.put("data", element)\n\n          val rqst: IndexRequest = Requests.indexRequest\n            .index("my-index")\n            .`type`("my-type")\n            .source(json)\n\n          indexer.add(rqst)\n     }\n  }\n)\n\n// \u6279\u91cf\u8bf7\u6c42\u7684\u914d\u7f6e\uff1b\u4e0b\u9762\u7684\u8bbe\u7f6e\u4f7f sink \u5728\u63a5\u6536\u6bcf\u4e2a\u5143\u7d20\u4e4b\u540e\u7acb\u5373\u63d0\u4ea4\uff0c\u5426\u5219\u8fd9\u4e9b\u5143\u7d20\u5c06\u88ab\u7f13\u5b58\u8d77\u6765\nesSinkBuilder.setBulkFlushMaxActions(1)\n\n// \u4e3a\u5185\u90e8\u521b\u5efa\u7684 REST \u5ba2\u6237\u7aef\u63d0\u4f9b\u4e00\u4e2a\u81ea\u5b9a\u4e49\u914d\u7f6e\u4fe1\u606f\u7684 RestClientFactory\nesSinkBuilder.setRestClientFactory(new RestClientFactory {\n  override def configureRestClientBuilder(restClientBuilder: RestClientBuilder): Unit = {\n       restClientBuilder.setDefaultHeaders(...)\n       restClientBuilder.setMaxRetryTimeoutMillis(...)\n       restClientBuilder.setPathPrefix(...)\n       restClientBuilder.setHttpClientConfigCallback(...)\n  }\n})\n\n// \u6700\u540e\uff0c\u6784\u5efa\u5e76\u6dfb\u52a0 sink \u5230\u4f5c\u4e1a\u7ba1\u9053\u4e2d\ninput.addSink(esSinkBuilder.build)\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["\u4ee5\u4e0a\u521b\u5efaElasticsearchSink\u6dfb\u52a0\u53c2\u6570\u975e\u5e38\u7684\u4e0d\u7075\u654f\u3002",(0,a.jsx)(n.code,{children:"StreamPark"}),"\u4f7f\u7528\u7ea6\u5b9a\u5927\u4e8e\u914d\u7f6e\u3001\u81ea\u52a8\u914d\u7f6e\u7684\u65b9\u5f0f\u53ea\u9700\u8981\u914d\u7f6ees\n\u8fde\u63a5\u53c2\u6570\u3001flink\u8fd0\u884c\u53c2\u6570\uff0cStreamPark \u4f1a\u81ea\u52a8\u7ec4\u88c5source\u548csink\uff0c\u6781\u5927\u7684\u7b80\u5316\u5f00\u53d1\u903b\u8f91\uff0c\u63d0\u5347\u5f00\u53d1\u6548\u7387\u548c\u7ef4\u62a4\u6027\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"apache-streampark-\u5199\u5165-elasticsearch",children:"Apache StreamPark\u2122 \u5199\u5165 Elasticsearch"}),"\n",(0,a.jsx)(n.p,{children:"ESSink \u5728\u542f\u7528 Flink checkpoint \u540e\uff0c\u4fdd\u8bc1\u81f3\u5c11\u4e00\u6b21\u5c06\u64cd\u4f5c\u8bf7\u6c42\u53d1\u9001\u5230 Elasticsearch \u96c6\u7fa4\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"1-\u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f",children:"1. \u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"#redis sink \u914d\u7f6e\n#  \u5fc5\u586b\u53c2\u6570\uff0c\u591a\u4e2a\u8282\u70b9\u4f7f\u7528 host1:port, host2:port,\nhost: localhost:9200\n#  \u9009\u586b\u53c2\u6570\n#  es:\n#    disableFlushOnCheckpoint: true #\u9ed8\u8ba4\u4e3afalse\n#    auth:\n#    user:\n#      password:\n#    rest:\n#      max.retry.timeout:\n#      path.prefix:\n#      content.type:\n#    connect:\n#      request.timeout:\n#      timeout:\n#    cluster.name: elasticsearch\n#  client.transport.sniff:\n#  bulk.flush.:\n"})}),"\n",(0,a.jsx)(n.h3,{id:"2-\u5199\u5165elasticsearch",children:"2. \u5199\u5165Elasticsearch"}),"\n",(0,a.jsx)(n.p,{children:"\u7528 StreamPark \u5199\u5165Elasticsearch\u975e\u5e38\u7b80\u5355,\u4ee3\u7801\u5982\u4e0b:"}),"\n",(0,a.jsx)(s.A,{children:(0,a.jsx)(i.A,{value:"scala",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'import org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.sink.ESSink\nimport org.apache.streampark.flink.core.scala.util.ElasticSearchUtils\nimport org.apache.flink.api.scala._\nimport org.elasticsearch.action.index.IndexRequest\nimport org.json4s.DefaultFormats\nimport org.json4s.jackson.Serialization\n\nimport java.util.Date\n\nobject ConnectorApp extends FlinkStreaming {\n\n\n  implicit lazy val formats: DefaultFormats.type = org.json4s.DefaultFormats\n\n  override def handle(): Unit = {\n    val ds = context.fromCollection(List(\n      OrderEntity(1, 1, 11.3d, 3.1d, new Date()),\n      OrderEntity(2, 1, 12.3d, 3.2d, new Date()),\n      OrderEntity(3, 1, 13.3d, 3.3d, new Date()),\n      OrderEntity(4, 1, 14.3d, 3.4d, new Date()),\n      OrderEntity(5, 1, 15.3d, 7.5d, new Date()),\n      OrderEntity(6, 1, 16.3d, 3.6d, new Date()),\n      OrderEntity(7, 1, 17.3d, 3.7d, new Date())\n    ))\n\n    // es sink.........\n\n    //1)\u5b9a\u4e49 Index\u7684\u5199\u5165\u89c4\u5219\n    implicit def indexReq(x: OrderEntity): IndexRequest = ElasticSearchUtils.indexRequest(\n      "flink_order",\n      "_doc",\n      s"${x.id}_${x.time.getTime}",\n      Serialization.write(x)\n    )\n    //3)\u5b9a\u4e49esSink\u5e76\u4e0b\u6c89=\u6570\u636e. done\n    ESSink().sink6[OrderEntity](ds)\n  }\n\n\n  case class OrderEntity(id: Int, num: Int, price: Double, gmv: Double, time: Date) extends Serializable\n\n}\n'})})})}),"\n",(0,a.jsx)(n.p,{children:"Flink ElasticsearchSinkFunction\u53ef\u4ee5\u6267\u884c\u591a\u79cd\u7c7b\u578b\u8bf7\u6c42\uff0c\u5982\uff08DeleteRequest\u3001 UpdateRequest\u3001IndexRequest\uff09,StreamPark\u4e5f\u5bf9\u4ee5\u4e0a\u529f\u80fd\u8fdb\u884c\u4e86\u652f\u6301\uff0c\u5bf9\u5e94\u65b9\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'import org.apache.streampark.flink.core.scala.StreamingContext\nimport org.apache.flink.streaming.api.datastream.DataStreamSink\nimport org.apache.flink.streaming.api.scala.DataStream\nimport org.apache.flink.streaming.connectors.elasticsearch.ActionRequestFailureHandler\nimport org.apache.flink.streaming.connectors.elasticsearch.util.RetryRejectedExecutionFailureHandler\nimport org.apache.flink.streaming.connectors.elasticsearch6.RestClientFactory\nimport org.elasticsearch.action.delete.DeleteRequest\nimport org.elasticsearch.action.index.IndexRequest\nimport org.elasticsearch.action.update.UpdateRequest\n\nimport java.util.Properties\nimport scala.annotation.meta.param\n\n\nclass ESSink(@(transient@param) context: StreamingContext,\n             property: Properties = new Properties(),\n             parallelism: Int = 0,\n             name: String = null,\n             uid: String = null) {\n\n  /**\n   * for ElasticSearch6\n   *\n   * @param stream\n   * @param suffix\n   * @param restClientFactory\n   * @param failureHandler\n   * @param f\n   * @tparam T\n   * @return\n   */\n  def sink6[T](stream: DataStream[T],\n               suffix: String = "",\n               restClientFactory: RestClientFactory = null,\n               failureHandler: ActionRequestFailureHandler = new RetryRejectedExecutionFailureHandler)\n              (implicit f: T => IndexRequest): DataStreamSink[T] = {\n\n    new ES6Sink(context, property, parallelism, name, uid).sink[T](stream, suffix, restClientFactory, failureHandler, f)\n  }\n\n\n\n  def update6[T](stream: DataStream[T],\n               suffix: String = "",\n               restClientFactory: RestClientFactory = null,\n               failureHandler: ActionRequestFailureHandler = new RetryRejectedExecutionFailureHandler)\n              ( f: T => UpdateRequest): DataStreamSink[T] = {\n\n    new ES6Sink(context, property, parallelism, name, uid).sink[T](stream, suffix, restClientFactory, failureHandler, f)\n  }\n\n\n  def delete6[T](stream: DataStream[T],\n               suffix: String = "",\n               restClientFactory: RestClientFactory = null,\n               failureHandler: ActionRequestFailureHandler = new RetryRejectedExecutionFailureHandler)\n              ( f: T => DeleteRequest): DataStreamSink[T] = {\n\n    new ES6Sink(context, property, parallelism, name, uid).sink[T](stream, suffix, restClientFactory, failureHandler, f)\n  }\n\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"info",children:(0,a.jsx)(n.p,{children:"\u542f\u7528 Flink checkpoint \u540e\uff0cFlink Elasticsearch Sink \u4fdd\u8bc1\u81f3\u5c11\u4e00\u6b21\u5c06\u64cd\u4f5c\u8bf7\u6c42\u53d1\u9001\u5230 Elasticsearch \u96c6\u7fa4\u3002 \u8fd9\u662f\u901a\u8fc7\u5728\u8fdb\u884c checkpoint \u65f6\u7b49\u5f85 BulkProcessor \u4e2d\u6240\u6709\u6302\u8d77\u7684\u64cd\u4f5c\u8bf7\u6c42\u6765\u5b9e\u73b0\u3002 \u8fd9\u6709\u6548\u5730\u4fdd\u8bc1\u4e86\u5728\u89e6\u53d1 checkpoint \u4e4b\u524d\u6240\u6709\u7684\u8bf7\u6c42\u88ab Elasticsearch \u6210\u529f\u786e\u8ba4\uff0c\u7136\u540e\u7ee7\u7eed\u5904\u7406\u53d1\u9001\u5230 sink \u7684\u8bb0\u5f55\u3002\n\u7528\u6237\u60f3\u8981\u7981\u7528\u5237\u65b0\uff0c\u53ef\u4ee5\u914d\u7f6edisableFlushOnCheckpoint\u4e3atrue\u6765\u5b9e\u73b0\uff0c\u5b9e\u8d28\u4e0a\u610f\u5473\u7740 sink \u5c06\u4e0d\u518d\u63d0\u4f9b\u4efb\u4f55\u53ef\u9760\u7684\u4ea4\u4ed8\u4fdd\u8bc1\uff0c\u5373\u4f7f\u542f\u7528\u4e86\u4f5c\u4e1a\u62d3\u6251\u7684 checkpoint\u3002"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5176\u4ed6\u914d\u7f6e",children:"\u5176\u4ed6\u914d\u7f6e"}),"\n",(0,a.jsx)(n.h3,{id:"\u5904\u7406\u5931\u8d25\u7684-elasticsearch-\u8bf7\u6c42",children:"\u5904\u7406\u5931\u8d25\u7684 Elasticsearch \u8bf7\u6c42"}),"\n",(0,a.jsxs)(n.p,{children:["Elasticsearch \u64cd\u4f5c\u8bf7\u6c42\u53ef\u80fd\u7531\u4e8e\u591a\u79cd\u539f\u56e0\u800c\u5931\u8d25\uff0c\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0ActionRequestFailureHandler\u6765\u6307\u5b9a\u5931\u8d25\u5904\u7406\u903b\u8f91\uff0c\u89c1\n",(0,a.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/datastream/elasticsearch/#elasticsearch-sink",children:"\u5b98\u65b9\u6587\u6863"}),(0,a.jsx)(n.strong,{children:"\u5904\u7406\u5931\u8d25\u7684 Elasticsearch \u8bf7\u6c42"})," \u5355\u5143"]}),"\n",(0,a.jsx)(n.h3,{id:"\u914d\u7f6e\u5185\u90e8\u6279\u91cf\u5904\u7406\u5668",children:"\u914d\u7f6e\u5185\u90e8\u6279\u91cf\u5904\u7406\u5668"}),"\n",(0,a.jsxs)(n.p,{children:["es\u5185\u90e8",(0,a.jsx)(n.code,{children:"BulkProcessor"}),"\u53ef\u4ee5\u8fdb\u4e00\u6b65\u914d\u7f6e\u5176\u5982\u4f55\u5237\u65b0\u7f13\u5b58\u64cd\u4f5c\u8bf7\u6c42\u7684\u884c\u4e3a\u8be6\u7ec6\u67e5\u770b",(0,a.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/connectors/datastream/elasticsearch/#elasticsearch-sink",children:"\u5b98\u65b9\u6587\u6863"}),(0,a.jsx)(n.strong,{children:"\u914d\u7f6e\u5185\u90e8\u6279\u91cf\u5904\u7406\u5668"})," \u5355\u5143"]}),"\n",(0,a.jsx)(n.h3,{id:"apache-streampark\u914d\u7f6e",children:"Apache StreamPark\u2122\u914d\u7f6e"}),"\n",(0,a.jsxs)(n.p,{children:["\u5176\u4ed6\u7684\u6240\u6709\u7684\u914d\u7f6e\u90fd\u5fc5\u987b\u9075\u5b88 ",(0,a.jsx)(n.strong,{children:"StreamPark"})," \u914d\u7f6e,\u5177\u4f53\u53ef\u914d\u7f6e\u9879\u548c\u5404\u4e2a\u53c2\u6570\u7684\u4f5c\u7528\u8bf7\u53c2\u8003",(0,a.jsx)(n.a,{href:"/docs/development/config",children:"\u9879\u76ee\u914d\u7f6e"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},24990:(e,n,t)=>{t.d(n,{A:()=>i});t(30758);var a=t(13526);const r={tabItem:"tabItem_Xevx"};var s=t(86070);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},60630:(e,n,t)=>{t.d(n,{A:()=>E});var a=t(30758),r=t(13526),s=t(72469),i=t(25557),c=t(99688),l=t(17822),o=t(54991),d=t(52629);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[o,u]=m({queryString:t,groupId:r}),[f,k]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),x=(()=>{const e=o??f;return p({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),k(e)}),[u,k,s]),tabValues:s}}var k=t(78820);const x={tabList:"tabList_wCRy",tabItem:"tabItem_v3ez"};var g=t(86070);function S(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=c[t].value;r!==a&&(o(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,g.jsx)(S,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function E(e){const n=(0,k.A)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(n))}},76113:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var a=t(30758);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);