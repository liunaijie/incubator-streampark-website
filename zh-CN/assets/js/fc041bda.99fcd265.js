"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[3830],{67091:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>l});var s=r(86070),a=r(76113);const c={id:"docker-deployment",title:"\u5e73\u53f0\u5b89\u88c5 (Docker)",sidebar_position:3},o=void 0,t={id:"get-started/docker-deployment",title:"\u5e73\u53f0\u5b89\u88c5 (Docker)",description:"\u672c\u6559\u7a0b\u4f7f\u7528 Docker \u5b8c\u6210 StreamPark \u5e73\u53f0\u7684\u90e8\u7f72\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/get-started/3.dockerDeployment.md",sourceDirName:"get-started",slug:"/get-started/docker-deployment",permalink:"/zh-CN/docs/get-started/docker-deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/get-started/3.dockerDeployment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"docker-deployment",title:"\u5e73\u53f0\u5b89\u88c5 (Docker)",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5e73\u53f0\u5b89\u88c5",permalink:"/zh-CN/docs/get-started/deployment"},next:{title:"\u5e73\u53f0\u5feb\u901f\u4e0a\u624b",permalink:"/zh-CN/docs/get-started/how-to-use"}},d={},l=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"1. \u5b89\u88c5 docker",id:"1-\u5b89\u88c5-docker",level:3},{value:"2. \u5b89\u88c5 docker-compose",id:"2-\u5b89\u88c5-docker-compose",level:3},{value:"\u90e8\u7f72 Apache StreamPark\u2122",id:"\u90e8\u7f72-apache-streampark",level:2},{value:"1. \u57fa\u4e8e h2 \u548c docker-compose \u90e8\u7f72 Apache StreamPark\u2122",id:"1-\u57fa\u4e8e-h2-\u548c-docker-compose-\u90e8\u7f72-apache-streampark",level:3},{value:"2. \u90e8\u7f72",id:"2-\u90e8\u7f72",level:4},{value:"3. \u914d\u7f6e Flink home",id:"3-\u914d\u7f6e-flink-home",level:4},{value:"4. \u914d\u7f6e Session\u96c6\u7fa4",id:"4-\u914d\u7f6e-session\u96c6\u7fa4",level:4},{value:"5. \u63d0\u4ea4 Flink \u4f5c\u4e1a",id:"5-\u63d0\u4ea4-flink-\u4f5c\u4e1a",level:4},{value:"\u4f7f\u7528\u5df2\u6709\u7684 Mysql \u670d\u52a1",id:"\u4f7f\u7528\u5df2\u6709\u7684-mysql-\u670d\u52a1",level:4},{value:"\u6cbf\u7528\u5df2\u6709\u7684 PgSQL \u670d\u52a1",id:"\u6cbf\u7528\u5df2\u6709\u7684-pgsql-\u670d\u52a1",level:3},{value:"\u57fa\u4e8e\u6e90\u7801\u6784\u5efa\u955c\u50cf\u8fdb\u884cApache StreamPark\u2122\u90e8\u7f72",id:"\u57fa\u4e8e\u6e90\u7801\u6784\u5efa\u955c\u50cf\u8fdb\u884capache-streampark\u90e8\u7f72",level:2},{value:"docker-compse\u914d\u7f6e",id:"docker-compse\u914d\u7f6e",level:2},{value:"\u4e0a\u4f20\u914d\u7f6e\u81f3\u5bb9\u5668",id:"\u4e0a\u4f20\u914d\u7f6e\u81f3\u5bb9\u5668",level:2}];function i(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u672c\u6559\u7a0b\u4f7f\u7528 Docker \u5b8c\u6210 StreamPark \u5e73\u53f0\u7684\u90e8\u7f72\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u524d\u7f6e\u6761\u4ef6",children:"\u524d\u7f6e\u6761\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"Docker 1.13.1+\nDocker Compose 1.28.0+"}),"\n",(0,s.jsx)(n.h3,{id:"1-\u5b89\u88c5-docker",children:"1. \u5b89\u88c5 docker"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 docker \u542f\u52a8\u670d\u52a1\uff0c\u9700\u8981\u5148\u5b89\u88c5 ",(0,s.jsx)(n.a,{href:"https://www.docker.com/",children:"docker"})]}),"\n",(0,s.jsx)(n.h3,{id:"2-\u5b89\u88c5-docker-compose",children:"2. \u5b89\u88c5 docker-compose"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 docker-compose \u542f\u52a8\u670d\u52a1\uff0c\u9700\u8981\u5148\u5b89\u88c5 ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"docker-compose"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u90e8\u7f72-apache-streampark",children:"\u90e8\u7f72 Apache StreamPark\u2122"}),"\n",(0,s.jsx)(n.h3,{id:"1-\u57fa\u4e8e-h2-\u548c-docker-compose-\u90e8\u7f72-apache-streampark",children:"1. \u57fa\u4e8e h2 \u548c docker-compose \u90e8\u7f72 Apache StreamPark\u2122"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u65b9\u5f0f\u9002\u7528\u4e8e\u5165\u95e8\u5b66\u4e60\u3001\u719f\u6089\u529f\u80fd\u7279\u6027\uff0c\u5bb9\u5668\u91cd\u542f\u540e\u914d\u7f6e\u4f1a\u5931\u6548\uff0c\u4e0b\u65b9\u53ef\u4ee5\u914d\u7f6eMysql\u3001Pgsql\u8fdb\u884c\u6301\u4e45\u5316"}),"\n",(0,s.jsx)(n.h4,{id:"2-\u90e8\u7f72",children:"2. \u90e8\u7f72"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"wget https://raw.githubusercontent.com/apache/incubator-streampark/dev/docker/docker-compose.yaml\nwget https://raw.githubusercontent.com/apache/incubator-streampark/dev/docker/.env\ndocker-compose up -d\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u670d\u52a1\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.a,{href:"http://localhost:10000",children:"http://localhost:10000"})," \u8bbf\u95ee StreamPark\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.a,{href:"http://localhost:8081%E8%AE%BF%E9%97%AEFlink%E3%80%82%E8%AE%BF%E9%97%AEStreamPark%E9%93%BE%E6%8E%A5%E5%90%8E%E4%BC%9A%E8%B7%B3%E8%BD%AC%E5%88%B0%E7%99%BB%E9%99%86%E9%A1%B5%E9%9D%A2%EF%BC%8CStreamPark",children:"http://localhost:8081\u8bbf\u95eeFlink\u3002\u8bbf\u95eeStreamPark\u94fe\u63a5\u540e\u4f1a\u8df3\u8f6c\u5230\u767b\u9646\u9875\u9762\uff0cStreamPark"})," \u9ed8\u8ba4\u7684\u7528\u6237\u548c\u5bc6\u7801\u5206\u522b\u4e3a admin \u548c streampark\u3002\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u64cd\u4f5c\u8bf7\u53c2\u8003\u7528\u6237\u624b\u518c\u5feb\u901f\u4e0a\u624b\u3002\n",(0,s.jsx)(n.img,{src:r(48166).A+"",width:"719",height:"273"})]}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u90e8\u7f72\u65b9\u5f0f\u4f1a\u81ea\u52a8\u7ed9\u4f60\u542f\u52a8\u4e00\u4e2aflink-session\u96c6\u7fa4\u4f9b\u4f60\u53bb\u8fdb\u884cflink\u4efb\u52a1\u4f7f\u7528\uff0c\u540c\u65f6\u4e5f\u4f1a\u6302\u8f7d\u672c\u5730docker\u670d\u52a1\u4ee5\u53ca~/.kube\u6765\u7528\u4e8ek8s\u6a21\u5f0f\u7684\u4efb\u52a1\u63d0\u4ea4"}),"\n",(0,s.jsx)(n.h4,{id:"3-\u914d\u7f6e-flink-home",children:"3. \u914d\u7f6e Flink home"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(21554).A+"",width:"1310",height:"498"})}),"\n",(0,s.jsx)(n.h4,{id:"4-\u914d\u7f6e-session\u96c6\u7fa4",children:"4. \u914d\u7f6e Session\u96c6\u7fa4"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(34562).A+"",width:"1302",height:"550"})}),"\n",(0,s.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u5728\u914d\u7f6eflink-sessin\u96c6\u7fa4\u5730\u5740\u65f6\uff0c\u586b\u5199\u7684ip\u5730\u5740\u4e0d\u662flocalhost\uff0c\u800c\u662f\u5bbf\u4e3b\u673a\u7f51\u7edcip\uff0c\u8be5ip\u5730\u5740\u53ef\u4ee5\u901a\u8fc7ifconfig\u6765\u8fdb\u884c\u83b7\u53d6"}),"\n",(0,s.jsx)(n.h4,{id:"5-\u63d0\u4ea4-flink-\u4f5c\u4e1a",children:"5. \u63d0\u4ea4 Flink \u4f5c\u4e1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(55670).A+"",width:"1207",height:"627"})}),"\n",(0,s.jsx)(n.h4,{id:"\u4f7f\u7528\u5df2\u6709\u7684-mysql-\u670d\u52a1",children:"\u4f7f\u7528\u5df2\u6709\u7684 Mysql \u670d\u52a1"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u65b9\u5f0f\u9002\u7528\u4e8e\u4f01\u4e1a\u751f\u4ea7\uff0c\u4f60\u53ef\u4ee5\u57fa\u4e8e docker \u5feb\u901f\u90e8\u7f72 StreamPark \u5e76\u5c06\u5176\u548c\u7ebf\u4e0a\u6570\u636e\u5e93\u8fdb\u884c\u5173\u8054\n\u6ce8\u610f\uff1a\u90e8\u7f72\u652f\u6301\u7684\u591a\u6837\u6027\u662f\u901a\u8fc7.env\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u6765\u8fdb\u884c\u7ef4\u62a4\u7684\uff0c\u8981\u4fdd\u8bc1\u76ee\u5f55\u4e0b\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a.env\u6587\u4ef6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"wget https://raw.githubusercontent.com/apache/incubator-streampark/dev/docker/docker-compose.yaml\nwget https://raw.githubusercontent.com/apache/incubator-streampark/dev/docker/mysql/.env\nvim .env\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u9700\u8981\u5148\u5728mysql\u5148\u521b\u5efastreampark\u6570\u636e\u5e93\uff0c\u7136\u540e\u624b\u52a8\u6267\u884c\u5bf9\u5e94\u7684schema\u548cdata\u91cc\u9762\u5bf9\u5e94\u6570\u636e\u6e90\u7684sql"}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u540e\u4fee\u6539\u5bf9\u5e94\u7684\u8fde\u63a5\u4fe1\u606f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"SPRING_PROFILES_ACTIVE=mysql\nSPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/streampark?useSSL=false&useUnicode=true&characterEncoding=UTF-8&allowPublicKeyRetrieval=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8\nSPRING_DATASOURCE_USERNAME=root\nSPRING_DATASOURCE_PASSWORD=streampark\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker-compose up -d\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6cbf\u7528\u5df2\u6709\u7684-pgsql-\u670d\u52a1",children:"\u6cbf\u7528\u5df2\u6709\u7684 PgSQL \u670d\u52a1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"wget https://raw.githubusercontent.com/apache/incubator-streampark/dev/docker/docker-compose.yaml\nwget https://raw.githubusercontent.com/apache/incubator-streampark/dev/docker/pgsql/.env\nvim .env\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4fee\u6539\u5bf9\u5e94\u7684\u8fde\u63a5\u4fe1\u606f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"SPRING_PROFILES_ACTIVE=pgsql\nSPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/streampark?stringtype=unspecified\nSPRING_DATASOURCE_USERNAME=postgres\nSPRING_DATASOURCE_PASSWORD=streampark\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker-compose up -d\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u57fa\u4e8e\u6e90\u7801\u6784\u5efa\u955c\u50cf\u8fdb\u884capache-streampark\u90e8\u7f72",children:"\u57fa\u4e8e\u6e90\u7801\u6784\u5efa\u955c\u50cf\u8fdb\u884cApache StreamPark\u2122\u90e8\u7f72"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/apache/incubator-streampark.git\ncd incubator-streampark/docker\nvim docker-compose.yaml\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"    build:\n      context: ../..\n      dockerfile: docker/Dockerfile\n#   image: ${HUB}:${TAG}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(97611).A+"",width:"731",height:"380"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker-compose up -d\n"})}),"\n",(0,s.jsx)(n.h2,{id:"docker-compse\u914d\u7f6e",children:"docker-compse\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"docker-compose.yaml\u4f1a\u5f15\u7528env\u6587\u4ef6\u7684\u914d\u7f6e\uff0c\u4fee\u6539\u540e\u7684\u914d\u7f6e\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"version: '3.8'\nservices:\n  ## streampark-console\u5bb9\u5668\n  streampark-console:\n    ## streampark\u7684\u955c\u50cf\n    image: apache/streampark:latest\n    ## streampark\u7684\u955c\u50cf\u542f\u52a8\u547d\u4ee4\n    command: ${\n   RUN_COMMAND}\n    ports:\n      - 10000:10000\n    ## \u73af\u5883\u914d\u7f6e\u6587\u4ef6\n    env_file: .env\n    environment:\n      ## \u58f0\u660e\u73af\u5883\u53d8\u91cf\n      HADOOP_HOME: ${\n   HADOOP_HOME}\n    volumes:\n      - flink:/streampark/flink/${\n   FLINK}\n      - /var/run/docker.sock:/var/run/docker.sock\n      - /etc/hosts:/etc/hosts:ro\n      - ~/.kube:/root/.kube:ro\n    privileged: true\n    restart: unless-stopped\n    networks:\n      - streampark\n\n  ## flink-jobmanager\u5bb9\u5668\n  flink-jobmanager:\n    image: ${\n   FLINK_IMAGE}\n    ports:\n      - \"8081:8081\"\n    command: jobmanager\n    volumes:\n      - flink:/opt/flink\n    env_file: .env\n    restart: unless-stopped\n    privileged: true\n    networks:\n      - streampark\n\n  ## streampark-taskmanager\u5bb9\u5668\n  flink-taskmanager:\n    image: ${\n   FLINK_IMAGE}\n    depends_on:\n      - flink-jobmanager\n    command: taskmanager\n    deploy:\n      replicas: 1\n    env_file: .env\n    restart: unless-stopped\n    privileged: true\n    networks:\n      - streampark\n\nnetworks:\n  streampark:\n    driver: bridge\n\nvolumes:\n  flink:\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u540e\uff0c\u6267\u884c\u542f\u52a8\u547d\u4ee4\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd docker\ndocker-compose up -d\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u4f7f\u7528docker ps\u6765\u67e5\u770b\u662f\u5426\u5b89\u88c5\u6210\u529f\uff0c\u663e\u793a\u5982\u4e0b\u4fe1\u606f\uff0c\u8868\u793a\u5b89\u88c5\u6210\u529f\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(8401).A+"",width:"1080",height:"134"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e0a\u4f20\u914d\u7f6e\u81f3\u5bb9\u5668",children:"\u4e0a\u4f20\u914d\u7f6e\u81f3\u5bb9\u5668"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u524d\u9762\u7684env\u6587\u4ef6\uff0c\u58f0\u660e\u4e86HADOOP_HOME\uff0c\u5bf9\u5e94\u7684\u76ee\u5f55\u4e3a ",(0,s.jsx)(n.code,{children:"/streampark/hadoop"}),"\uff0c\u6240\u4ee5\u9700\u8981\u4e0a\u4f20hadoop\u5b89\u88c5\u5305\u4e0b\u7684 ",(0,s.jsx)(n.code,{children:"/etc/hadoop"})," \u81f3 ",(0,s.jsx)(n.code,{children:"/streampark/hadoop"})," \u76ee\u5f55\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"## \u4e0a\u4f20hadoop\u8d44\u6e90\ndocker cp etc\u6574\u4e2a\u76ee\u5f55 streampark-docker_streampark-console_1:/streampark/hadoop\n## \u8fdb\u5165\u5bb9\u5668\ndocker exec -it streampark-docker_streampark-console_1 bash\n## \u67e5\u770b\nls\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(98253).A+"",width:"1080",height:"87"})}),"\n",(0,s.jsx)(n.p,{children:"\u540c\u65f6\uff0c\u5176\u5b83\u914d\u7f6e\u6587\u4ef6\uff0c\u5982maven\u7684settings.xml\u6587\u4ef6\u4e5f\u662f\u4ee5\u540c\u6837\u7684\u65b9\u5f0f\u4e0a\u4f20\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},34562:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/remote-c75d520f5a61d9f100c0e1c58d304eb3.png"},55670:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/remoteSubmission-390200dc9d1b5a55add19d303add2698.png"},48166:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/streampark_docker-compose-b54adcb7090f479ccb4db544ac8577b9.png"},98253:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/streampark_docker_ls_hadoop-8e7848bd06b4c193ef02d0f722ad006a.png"},8401:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/streampark_docker_ps-c715c198d48a9cffef4731beedef4f94.png"},21554:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/streampark_flinkhome-d6e90dd6fa04a003feef2eb6086ca3c3.png"},97611:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/streampark_source_generation_image-6022aab5159e058f0cb295ef4f13f508.png"},76113:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>t});var s=r(30758);const a={},c=s.createContext(a);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);