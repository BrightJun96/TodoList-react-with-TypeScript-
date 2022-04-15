# TodoList-react-with-TypeScript-
**Theme | To do List**

**Tech | React , Typescript , Context API**

**Hook | useState, useRef, useContext**

**Styling | styled-component**

### Description

#### 기능
기본적인 To do List를 구성해보았다.
**생성,추가,완료,삭제,수정의 기능을 구현**하였다.

#### Context API
**타입스크립트와 리액트**를 이용하여 To Do List를 만들었고 **props drilling을 줄이기 위하여 Context API를 사용**하였다.  
기존에 Context API를 사용하지 않고 구성하였다가 props drilling이 꽤 있다고 생각하여 **상태별로 context를 만들어 사용**하였다.

**두 가지 컨텍스트를 사용**하였는데 할 일 목록의 상태인 **TodoContext**와 인풋 상태인 **TextContext**를 만들었다.
각 컨텍스트에는 state와 dispatch를 분류하지않고 같이 담았다.
(분리할 경우 provider가 너무 많아질 것 같아서 분류하지 않았다.)

상태 관리로 **리덕스를 사용하지 않은 이유**는 위 이유처럼 **상태 카테고리가 복잡하지 않고** 두 가지 카테고리 정도만 있기 때문에
**Context API**를 사용하였다

#### 타입 분류
여러 컴포넌트에서 같은 타입을 쓸 이유가 많기 때문에**type을 모아둔 파일(@types.ts)을 생성하여 분류하여** 각 타입이 필요한 컴포넌트에 import하여 사용하였다.

#### styling
**styled-component를 사용**하였고 컴포넌트의 가독성을 위해 **styling component를 분류**하였다.

#### unique Id(uuid)
**새로 생성되는 TO DO에 id를 부여**하기 위해 index를 사용하지 않고 **uuid 라이브러리**를 사용하였다.


#### 유의할 점과 기본 사용법
유의할 점과 기본 사용법은 note.md에 구성해놓았다.







