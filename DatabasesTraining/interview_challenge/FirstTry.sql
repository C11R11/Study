# First Try, 28 student FAIL

select A.student_id from
(
#How many students who enrolled in at least 5 groups between the start of February 5 and the end of February 7
select distinct student_id from(
select count(student_id) count_student_date, student_id
from enrollment 
where enrollment_hour between '2024-02-05' and '2024-02-08'
group by student_id) as A
where count_student_date >= 5
order by student_id desc
) as A, 
(
# enrolled in at least one subject with a code ending in `1`?"
select distinct student_id
from enrollment, 
 (select `group`.id as gr_id, `group`.code, subject.code as 'subject_code', subject.name from `group`, subject where `group`.subject_id = subject.id and RIGHT(subject.code, 1) = '1') as C
where enrollment.group_id = C.gr_id
and enrollment_hour between '2024-02-05' and '2024-02-08'
) as B
where A.student_id = B.student_id



