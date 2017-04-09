Insert into ProjectRoleMapping
select 
1 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.Account=p.Account
where RHMSRoleName='DE Account Lead'
and u.SubHorizontalName is null
and u.SBU2Name is null
--and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
and u.HorizontalName is null
and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
--and u.HorizontalName is not null
--and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;

Insert into ProjectRoleMapping
select 
2 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.ParentAccountName=p.ParentAccountName
and u.VerticalName=p.VerticalName
where RHMSRoleName='DE Account Lead'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
--and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
and u.HorizontalName is null
--and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
--and u.HorizontalName is not null
and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;

Insert into ProjectRoleMapping
select 
3 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.AccountName=p.AccountName
and u.VerticalName=p.VerticalName
where RHMSRoleName='DE Account Lead'
and u.SubHorizontalName is null
and u.SBU2Name is null
--and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
--and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
and u.HorizontalName is null
and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
--and u.HorizontalName is not null
--and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;


Insert into ProjectRoleMapping
select 
4 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.ParentAccountName=p.ParentAccountName
where RHMSRoleName='DE Account Lead'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
and u.HorizontalName is null
--and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
--and u.HorizontalName is not null
and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;

Insert into ProjectRoleMapping
select 
1 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.Account=p.Account
where RHMSRoleName='DE Account Team member'
and u.SubHorizontalName is null
and u.SBU2Name is null
--and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
and u.HorizontalName is null
and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
--and u.HorizontalName is not null
--and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;

Insert into ProjectRoleMapping
select 
2 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.ParentAccountName=p.ParentAccountName
and u.VerticalName=p.VerticalName
where RHMSRoleName='DE Account Team member'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
--and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
and u.HorizontalName is null
--and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
--and u.HorizontalName is not null
and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;

Insert into ProjectRoleMapping
select 
3 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.Account=p.Account
and u.VerticalName=p.VerticalName
where RHMSRoleName='DE Account Team member'
and u.SubHorizontalName is null
and u.SBU2Name is null
--and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
--and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
and u.HorizontalName is null
and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
--and u.HorizontalName is not null
--and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;

Insert into ProjectRoleMapping
select 
4 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.ParentAccountName=p.ParentAccountName
where RHMSRoleName='DE Account Team member'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
and u.HorizontalName is null
--and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
--and u.HorizontalName is not null
and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;


Insert into ProjectRoleMapping
select 
5 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.HorizontalName=p.HorizontalName
where RHMSRoleName='DE Enable Head'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
--and u.HorizontalName is null
and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
and u.HorizontalName is not null
--and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;



Insert into ProjectRoleMapping
select 
6 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.VerticalName=p.VerticalName
where RHMSRoleName='DE Enable Head'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
--and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
and u.HorizontalName is null
and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
--and u.HorizontalName is not null
--and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;


Insert into ProjectRoleMapping
select 
7 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.BUName=p.BUName
where RHMSRoleName='DE Enable Head'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
--and u.BUName is null
and u.HorizontalName is null
and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
and u.BUName is not null
--and u.HorizontalName is not null
--and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;



Insert into ProjectRoleMapping
select 
8 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.GroupName=p.GroupName
where RHMSRoleName='DE Enable Head'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
and u.HorizontalName is null
and u.ParentAccountName is null
and u.RegionName is null
--and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
--and u.HorizontalName is not null
--and u.ParentAccountName is not null
--and u.RegionName is not null
and u.GroupName is not null
--and u.DerivedRegionName is not null
;


Insert into ProjectRoleMapping
select 
13 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.HorizontalName=p.HorizontalName
and u.AccountName=p.AccountName
where RHMSRoleName='DE HZ Account Lead'
and u.SubHorizontalName is null
and u.SBU2Name is null
--and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
--and u.HorizontalName is null
and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
and u.HorizontalName is not null
--and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;

Insert into ProjectRoleMapping
select 
10 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.HorizontalName=p.HorizontalName
and u.ParentAccountName=p.ParentAccountName
and u.VerticalName=p.VerticalName
where RHMSRoleName='DE HZ Account Lead'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
--and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
--and u.HorizontalName is null
--and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
and u.HorizontalName is not null
and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;


Insert into ProjectRoleMapping
select 
13 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.HorizontalName=p.HorizontalName
and u.ParentAccountName=p.ParentAccountName
where RHMSRoleName='DE HZ Account Lead'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
--and u.HorizontalName is null
--and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
and u.HorizontalName is not null
and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;


Insert into ProjectRoleMapping
select 
5 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.HorizontalName=p.HorizontalName
where RHMSRoleName='DE HZ Account Lead'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
--and u.HorizontalName is null
and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
and u.HorizontalName is not null
--and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;


Insert into ProjectRoleMapping
select 
11 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.HorizontalName=p.HorizontalName
and u.VerticalName=p.VerticalName
where RHMSRoleName='DE HZ Account Lead'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
--and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
--and u.HorizontalName is null
and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
and u.HorizontalName is not null
--and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;




Insert into ProjectRoleMapping
select 
12 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.HorizontalName=p.HorizontalName
and u.ParentAccountName=p.ParentAccountName
and u.VerticalName=p.VerticalName
where RHMSRoleName='DE HZ Account Team member'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
--and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
--and u.HorizontalName is null
--and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
and u.HorizontalName is not null
and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;

Insert into ProjectRoleMapping
select 
13 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.HorizontalName=p.HorizontalName
and u.AccountName=p.AccountName
where RHMSRoleName='DE HZ Account Team member'
and u.SubHorizontalName is null
and u.SBU2Name is null
--and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
--and u.HorizontalName is null
and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
and u.HorizontalName is not null
--and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;


Insert into ProjectRoleMapping
select 
13 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.HorizontalName=p.HorizontalName
and u.ParentAccountName=p.ParentAccountName
where RHMSRoleName='DE HZ Account Team member'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
--and u.HorizontalName is null
--and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
and u.HorizontalName is not null
and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;


Insert into ProjectRoleMapping
select 
13 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.HorizontalName=p.HorizontalName
and u.ParentAccountName=p.ParentAccountName
and u.SBUName=p.SBUName
where RHMSRoleName='DE HZ Account Team member'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
--and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
--and u.HorizontalName is null
--and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
and u.HorizontalName is not null
and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;


Insert into ProjectRoleMapping
select 
5 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.HorizontalName=p.HorizontalName
where RHMSRoleName='DE HZ Account Team member'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
--and u.HorizontalName is null
and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
and u.HorizontalName is not null
--and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;


Insert into ProjectRoleMapping
select 
7 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.BUName=p.BUName
where RHMSRoleName='GEO DE Enable Lead'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
--and u.BUName is null
and u.HorizontalName is null
and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
and u.BUName is not null
--and u.HorizontalName is not null
--and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;

Insert into ProjectRoleMapping
select 
8 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.GroupName=p.GroupName
where RHMSRoleName='GEO DE Enable Lead'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
and u.HorizontalName is null
and u.ParentAccountName is null
and u.RegionName is null
--and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
--and u.HorizontalName is not null
--and u.ParentAccountName is not null
--and u.RegionName is not null
and u.GroupName is not null
--and u.DerivedRegionName is not null
;

Insert into ProjectRoleMapping
select 
7 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.BUName=p.BUName
where RHMSRoleName='GEO DE Enable Team member'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
--and u.BUName is null
and u.HorizontalName is null
and u.ParentAccountName is null
and u.RegionName is null
and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
and u.BUName is not null
--and u.HorizontalName is not null
--and u.ParentAccountName is not null
--and u.RegionName is not null
--and u.GroupName is not null
--and u.DerivedRegionName is not null
;

Insert into ProjectRoleMapping
select 
8 as RoleID,
ESAProjectID as ESAID,
AssociateID,
RHMSRoleId 
from UserRoles$ as  u
join Projects$ as p
on u.GroupName=p.GroupName
where RHMSRoleName='GEO DE Enable Team member'
and u.SubHorizontalName is null
and u.SBU2Name is null
and u.AccountName is null
and u.GeoGMName is null
and u.SBUName is null
and u.VerticalName is null
and u.SubVerticalName is null
and u.BUName is null
and u.HorizontalName is null
and u.ParentAccountName is null
and u.RegionName is null
--and u.GroupName is null
and u.DerivedRegionName is null
--and u.SubHorizontalName is not null
--and u.SBU2Name is not null
--and u.AccountName is not null
--and u.GeoGMName is not null
--and u.SBUName is not null
--and u.VerticalName is not null
--and u.SubVerticalName is not null
--and u.BUName is not null
--and u.HorizontalName is not null
--and u.ParentAccountName is not null
--and u.RegionName is not null
and u.GroupName is not null
--and u.DerivedRegionName is not null
;