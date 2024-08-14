# Database Migrations Documentation

## 001 Index User By Email

**Script**: `001-index-user-by-email.js`  
**Author**: Philip Rurka  
**Date**: 18/05/2024  
**Schema Targets**: users  
**Model Targets**: user  
**Purpose**:

- Added the ascending email indexing
<!-- - **Implementation Details**: -->

<br/>

## 002 Activities Analytics Collection

**Script**: `002-activities_analytics-collection.js`  
**Author**: Philip Rurka  
**Date**: 18/05/2024  
**Schema Targets**: activities_analytics  
**Model Targets**: activityAnalytics  
**Purpose**:

- Create Activities Collection
<!-- - **Implementation Details**: -->

<br/>

## 003 Create Initial ActivitiesAnalytics For Each User

**Script**: `003-create-initial-activitiesAnalytics-for-each-user.js`  
**Author**: Philip Rurka  
**Date**: 18/05/2024  
**Schema Targets**: activities_analytics  
**Model Targets**: activityAnalytics  
**Purpose**:

- Create a ActivitiesAnalytic for each user and set the email.
<!-- - **Implementation Details**: -->

<br/>

## 004 Apply user_id

**Script**: `004-apply-user_id.js`  
**Author**: Philip Rurka  
**Date**: 31/07/2024  
**Schema Targets**: activities_analytics, users  
**Model Targets**: activityAnalytics, Users  
**Purpose**:

- Create and add user_id
<!-- - **Implementation Details**: -->

<br/>

## 005 Add New Properties To User

**Script**: `005-add-new-properties-to-user.js`  
**Author**: Philip Rurka  
**Date**: 13/08/2024  
**Schema Targets**: users  
**Model Targets**: Users  
**Purpose**:

- Add name
- Add last_active
- Add status
<!-- - **Implementation Details**: -->

<br/>

## 006 Create Initial UserLogs

**Script**: `006-create-initial-userLogs.js`  
**Author**: Philip Rurka  
**Date**: 12/08/2024  
**Schema Targets**: userLogs  
**Model Targets**: UserLogs  
**Purpose**:

- Create a UserLogs for each user and set the email.
<!-- - **Implementation Details**: -->

<br/>
