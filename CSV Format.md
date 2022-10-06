## Initial Format

Party1 v Party2
Court

allext ^Intermediate data
/d. dat
/d. dat
.
. All file data
.
/d. dat

## Encode into

id,Party1,Party2,Court,IntrmdData B64,n(dat),dat B64,dat B64,dat B64,...,dat B64,/nextline
id,Party1,Party2,Court,IntrmdData B64,n(dat),dat B64,dat B64,dat B64,...,dat B64,/nextline
.
. All file data
.
id,Party1,Party2,Court,IntrmdData B64,n(dat),dat B64,dat B64,dat B64,...,dat B64,/nextline