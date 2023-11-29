### API란 뭘까?
Application
Programming
Interface => 무언가와 상호작용하는 방식을 의미

=> 어플리케이션과 상호작용하기 위한 방법을 정의함

### REST?
서로 다른 서버간의 통신이나 IOS어플리케이션이 서버와 통신할 때, REST API를 사용한다면, 그 통신은 URL로 이루어짐
REST api를 이용한 작업은 정말 간단하고, 거의 모든 디바이스들이 URL로 요청을 보낼 수 있음
URL을 요청하고, Data를 받아오기만 하면 됨.

### HTTP + REST
URL을 만들 때, 동사를 사용하는 것은 추천되지 않는 규칙임
/api/movies/create
/api/movies/upload
/api/movies/add
전부 같은 역할을 할 수 있기 때문,
따라서 HTTP METHOD를 사용할 수 있음, HTTP는 표준 명세를 가지고 있기 때문에 사람들이 바꿀 수 없음
"method"+"url"로 더 많은 것을 표현할 수 있음

GET /2/users/taeho/bookmarks
POST /2/users/taheo/bookmarks

서로 다른 역할을 하게 끔 만들 수 있다는 것!

### REST api의 문제점?
1. over-fetching
데이터를 쓰던 말던 너무 많은 Data를 받는다는 것 -> Data 전송이 느려짐(BE -> FE로 보내줄 양이 많아짐)
2. under-fetching
필요한 데이터보다 Data를 덜 받는 것 -> 한번의 URL 요청으로 정보를 얻었지만 얻은 정보를 통해서 다른 URL에 또 호출을 해야하는 경우
example, 영화 정보를 요청함, 장르 부분이 genres_ids:[12,34,56]으로 있으면 12번 장르가 comedy 라는것을 알기 위해 또 호출해야함

### 위 문제점은 GraphQL로 해결할 수 있다는 것!