# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here


### Ticket 1: 
* Title:
    - Add Custom ID Field to Agents Table

* Description:
    - Currently, the system generates reports with the internal database ID of each Agent. 
    - To allow Facilities to use their own custom IDs, we need to add a custom ID field to the Agents table. 
    - This will provide the ability for Facilities to save and manage their own IDs for each Agent.

* Acceptance Criteria:
    - A new field named "custom_id" is added to the Agents table in the database.
    - "custom_id" field accepts alphanumeric values and has a maximum length of 50 characters.
    - "custom_id" field should be a unique identifier for each Agent.
    - The existing functionality related to Agents, such as creating, updating, and deleting, is not affected.

* Implementation Details:
    - Modify the Agents table schema to include the "custom_id" field with the appropriate data type and length.
    - Add unique constraint in custom_id field
    - Update methods in Agent Model to include the "custom_id" in CRUD operations.
    - Write unit tests to verify the correctness of the new functionality.

* Efforts/Story Points: 3

### Ticket 2: 
* Title: 
    - Update 'getShiftsByFacility' to include "custom_id" of agent
    
* Description:
    - The 'getShiftsByFacility' function retrieves Shifts for a given Facility, including metadata about the assigned Agent. 
    - This ticket involves updating the function to include the "custom_id" field in the returned metadata.

* Acceptance Criteria:
   - Include the "custom_id" field of the corresponding Agent in the metadata for each Shift.
   - Ensure the existing functionality of the 'getShiftsByFacility' function remains intact

* Implementation Details:
    - Update 'getShiftsByFacility' function to include the custom ID for each Agent.
    - Write unit tests to verify the correctness of the new functionality.

* Efforts/Story Points: 2

### Ticket 3: 
* Title: 
    - Update Facility User Interface to Add custom ID input field
    
* Description:
    - The Facility's user interface needs to be updated to allow Facilities to view and update custom IDs for the Agents they work with.

* Acceptance Criteria:
   - Add a new input field in the Facility UI to input custom IDs for Agents.
   - Ensure the custom ID field is editable and visible.
   - Add Validations for the Agent custom ID field(alphanumeric, maximum length 50).
   - Ensure the existing functionality remains intact.

* Implementation Details:
    - Add a new input field to the Facility UI for entering Agent custom IDs.
    - Implement validation to enforce alphanumeric values and a maximum length of 50 characters for the custom ID field.
    - Integrate the custom ID field with the backend, allowing the Facility UI to save and update custom IDs for Agents.
    - Write unit tests to verify the correctness of the new functionality.

* Efforts/Story Points: 4

### Ticket 4: 
* Title: 
    - Update the 'generateReport' Function to Use the Custom ID Field
    
* Description:
    - The 'generateReport' function converts Shifts into PDF reports for Facilities. 
    - This ticket involves updating the 'generateReport' function to use the custom ID field instead of the internal database ID for each Agent in the generated reports.

* Acceptance Criteria:
   - Replace the internal database ID with the custom ID in the generated PDF report for each Agent.
   - Ensure the existing functionality remains intact.

* Implementation Details:
    - Retrieve the custom ID from the 'custom_id' field of the corresponding Agent and replace the internal database ID in the generated report.
    - Write unit tests to verify the correctness of the new functionality.

* Efforts/Story Points: 2


### Ticket 5: 
* Title: 
    - Production Deployment and Production Sanity testing
    
* Description:
    - Deploy changes of the above 4 tickets from staging to production.
    - Do one round of sanity testing after deployment

* Acceptance Criteria:
   - Replace the internal database ID with the custom ID in the generated PDF report for each Agent.
   - Ensure new functionality is working as expected in production and acceptance criteria is satisfied for all the above tickets.

* Implementation Details:
    - Merge staging branch to production.
    - Trigger Build
    - After build success start end to end testing of the functionality.

* Story Points: 1

## Assumptions
    1. Agent Custom ID field accepts alphanumeric values and has a maximum length of 50 characters.
