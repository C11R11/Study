--To create when its no one created
CREATE DATABASE test2;

Select * from student limit 10;

#All the groups
#SELECT distinct code FROM `group`;
#"How many students who enrolled in at least 5 groups between the start of February 5 and the end of February 7, 
# enrolled in at least one subject with a code ending in `1`?"

# List of subjects code ended in 1
#select `group`.id as gr_id, `group`.code, subject.code as 'subject_code', subject.name from `group`, subject where `group`.subject_id = subject.id and RIGHT(subject.code, 1) = '1';

#Students enrolled in at least one subject with a code ending in `1` 
/*select count(student_id), group_id, group_id, student_id, enrollment_hour, B.gr_id, B.code, B.subject_code
from enrollment,
(select `group`.id as gr_id, `group`.code, subject.code as 'subject_code', subject.name from `group`, subject where `group`.subject_id = subject.id and RIGHT(subject.code, 1) = '1'
) as B
where group_id = B.gr_id and enrollment_hour between '2024-02-05' and '2024-02-08' order by student_id desc*/

select `group`.id as gr_id, `group`.code, subject.code as 'subject_code', subject.name from `group`, subject where `group`.subject_id = subject.id and RIGHT(subject.code, 1) = '1';
select * from subject;
select distinct id from `group`;
select * from subject;


select * from `group` inner join subject on `group`.subject_id = subject.id 
where RIGHT(subject.code, 1) = '1'
group by `group`.id;

select `group`.id as gr_id
from `group` inner join subject
on `group`.subject_id = subject.id
where `group`.subject_id = subject.id and RIGHT(subject.code, 1) = '1';

#All the student and their groups that ends in 1. There are maybe repeated ones cause can have more than one enrollment (one or more groups with 1 at the end)
select * 
from enrollment  
 inner join (select `group`.id as gr_id, `group`.code, subject.code as 'subject_code', subject.name from `group`, subject where `group`.subject_id = subject.id and RIGHT(subject.code, 1) = '1') as C
on enrollment.group_id = C.gr_id
where enrollment_hour between '2024-02-05' and '2024-02-08'
order by student_id asc;



