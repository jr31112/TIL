.mode csv
.import users.csv users

-- 1. 나이가 30 이상인 사람
SELECT * from users WHERE age>=30;
-- 1. 나이가 30 이상인 사람의 이름
SELECT first_name from users WHERE age>=30;

-- 3. 나이가 30이상이고 성이 김인 사람의 이름과 나이
SELECT first_name, age from users WHERE age>=30 and last_name = '김';

-- 4. 나이가 30이상이고 성이 김인 사람의 인원수
SELECT COUNT(*) from users WHERE age>=30 and last_name = '김';

-- 5. 전체 데이터 갯수
SELECT COUNT(*) from users;

-- 6. 전체 평균 나이
SELECT AVG(age) from users;

-- 7. 30살 이상의 평균 나이
SELECT AVG(age) from users WHERE age >= 30;

-- 8. 계좌 잔액이 가장 높은 사람과 액수
SELECT first_name, MAX(balance) from users;

-- 9. users에서 30살 이상인 사람의 계좌 평균 잔액은?
SELECT AVG(balance) from users WHERE age >= 30;

-- 10. users에서 20대인 사람은?
SELECT * from users WHERE age LIKE '2_';

-- 11. 지역번호가 02인 사람은?
SELECT * from users WHERE phone LIKE '02-%';

-- 12. 이름이 '준'으로 끝나는 사람
SELECT * from users WHERE first_name LIKE '%준';

-- 13. 중간번호가 5114인 사람은?
SELECT * from users WHERE phone LIKE '%-5114-%';

-- 14. 나이순으로 정렬해서 10명 출력(ASC:오름차순(default) | DESC:내림차순)
SELECT * from users ORDER by age, last_name DESC LIMIT 10;

-- 15. 나이, 성순으로 정렬해서 10명 출력
SELECT * from users ORDER by age, last_name LIMIT 10;

-- 16. 나이, 성순으로 정렬해서 10번째 사람 출력
SELECT * from users ORDER by age, last_name LIMIT 1 OFFSET 9;