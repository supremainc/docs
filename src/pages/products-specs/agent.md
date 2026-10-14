# 제품 스펙 조회를 위한 페이지 만들기

데이터를 미리 받아서 진행하는게 아니라 화면 상에서 사용자가 실시간으로 불러오는 방식으로 페이지 제작

## 조회 모델

* BioStation 3 Max
* BioEntry W3
* BioStation 2a
* BioStation 3
* FaceStation F2
* FaceStation 2
* BioLite N2
* BioEntry W2
* BioEntry P2
* BioEntry R2
* X-Station 2
* XPass Q2
* XPass 2
* XPass D2
* XPass S2
* CoreStation 20
* CoreStation
* Door Interface
* Input Module
* Output Module
* Door Module
* Secure Module

## 참조 코드

./getProductSpecs.js

## 출력 데이터 샘플

./prodcutSpec.json

## 페이지 출력 속성

* `ModelName`
* `Section`
  * `AttributeGroup`
    *  `AttributeName` | `AttributeValue`

`AttributeGroup`이 `null`이면 테이블 row 로 표시