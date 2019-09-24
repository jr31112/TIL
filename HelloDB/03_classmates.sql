CREATE TABLE classmates(
    name TEXT,
    age INTEGER,
    address TEXT
);

-- DATA 추가(CRUD-C)
INSERT INTO classmates(name, age)
VALUES('홍길동', 23);

-- 모든 열의 데이터를 넣을 때는 컬럼을 명시할 필요가 없다!
INSERT INTO classmates
VALUES('홍길동', 30, '서울');

-- DB는 무결성을 보장하기 위해, 다양한 조건들을 확인해야한다.
-- sqlite는 특별한 Primary Key가 없으면 rowid를 제공해 준다.
-- Primary Key를 넣을 경우 INTEGER만 가능하다.
SELECT rowid, * FROM classmates;

-- CREATE TABLE classmates(
--     id INTEGER PRIMARY,
--     name TEXT NOT NULL,
--     age INT NOT NULL,
--     address TEXT NOT NULL
-- );

-- INSERT INTO classmates
-- VALUES(1, '홍길동', 30, '서울');

CREATE TABLE classmates(
    name TEXT NOT NULL,
    age INT NOT NULL,
    address TEXT NOT NULL
);

INSERT INTO classmates
VALUES('연용흠', 30, '서울'), ('박태수',27,'대전'), ('김준영', 26, '광주'), ('최무연',28,'의성');

-- DATA 선택(CRUD - R)
SELECT age, name FROM classmates;
-- 원하는 개수 만큼 보기
SELECT name FROM classmates LIMIT 1;
SELECT rowid, name FROM classmates LIMIT 1 OFFSET 2;
-- 조건 걸어 특정 정보 조회
SELECT age, name FROM classmates WHERE address='서울';
-- 특정 column 중복 제거
SELECT DISTINCT address FROM classmates;

-- DATA 삭제(CRUD-D)
DELETE FROM classmates where rowid=1;

-- 마지막 데이터를 삭제하고 새롭게 추가해보면,
-- id가 다시 활용되는 것을 볼 수 있다.
-- 이를 방지하려면, AUTOINCREMET (django에서 id값)

CREATE TABLE tests(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- DATA 수정(CRUD-U)
UPDATE classmates SET age=26, address='보령' WHERE name='연용흠';
SELECT rowid, * FROM classmates;