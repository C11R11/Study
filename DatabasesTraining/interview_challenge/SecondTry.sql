select distinct A.student_id from
(
select distinct * from (
select count(id) count_enrollment, student_id from enrollment where enrollment_hour between '2024-02-05' and '2024-02-08'
group by student_id
order by student_id desc) as aux
where count_enrollment > 4
) as A
inner join (
select * 
from enrollment  
 inner join (select `group`.id as gr_id, `group`.code, subject.code as 'subject_code', subject.name from `group`, subject where `group`.subject_id = subject.id and RIGHT(subject.code, 1) = '1') as C
on enrollment.group_id = C.gr_id
where enrollment_hour between '2024-02-05' and '2024-02-08'
order by student_id asc) as C where A.student_id = C.student_id