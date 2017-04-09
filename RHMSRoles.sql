select 
RHMSRoleName,
AssociateID,
AccountName,
VerticalName,
ParentAccountName
from UserRoles$
where RHMSRoleName='DE Account Lead'
order by AccountName,VerticalName,ParentAccountName;

select 
RHMSRoleName,
AssociateID,
AccountName,
VerticalName,
ParentAccountName
from UserRoles$
where RHMSRoleName='DE Account Team member'
order by AccountName,VerticalName,ParentAccountName;

select 
RHMSRoleName,
AssociateID,
VerticalName,
HorizontalName
from UserRoles$
where RHMSRoleName='DE Enable Head'
order by VerticalName,HorizontalName;


select 
RHMSRoleName,
AssociateID,
HorizontalName,
AccountName,
ParentAccountName,
VerticalName
from UserRoles$
where RHMSRoleName='DE HZ Account Lead'
--and AccountName is NULL
--and ParentAccountName is NULL
--and VerticalName is NULL
--and AccountName is not NULL
--and ParentAccountName is not NULL
--and VerticalName is not NULL
order by HorizontalName,AccountName,ParentAccountName,VerticalName;


select 
RHMSRoleName,
AssociateID,
HorizontalName,
AccountName,
ParentAccountName,
VerticalName
from UserRoles$
where RHMSRoleName='DE HZ Account Team member'
--and AccountName is NULL
--and ParentAccountName is NULL
--and VerticalName is NULL
--and AccountName is not NULL
--and ParentAccountName is not NULL
--and VerticalName is not NULL
order by HorizontalName,AccountName,ParentAccountName,VerticalName;


select 
RHMSRoleName,
AssociateID,
BUName,
GroupName
from UserRoles$
where RHMSRoleName='GEO DE Enable Lead'
order by BUName,GroupName;

select 
RHMSRoleName,
AssociateID,
BUName,
GroupName
from UserRoles$
where RHMSRoleName='GEO DE Enable Team member'
order by BUName,GroupName;




--select 
--Distinct 
----,SubHorizontalName
----,SBU2Name
----,AccountName
----,GeoGMName
----,SBUName
----,VerticalName
----,SubVerticalName
----,BUName
----,HorizontalName
----,ParentAccountName
----,RegionName
----,GroupName
----,DerivedRegionName
--from UserRoles$
--where RHMSRoleName='GEO DE Enable Team member';
