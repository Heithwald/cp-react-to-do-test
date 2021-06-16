# React to-do

The app allows to create new tasks, change theit title and status, and remove. It is also supposed to have filtering, but it turned out to be a mixed bag.

### Quick summary

New tasks are added on button click. The app stores tasks as objects in **tasks** state (array). The object has two properties: title and status.

Tasks are rendered by mapping over the array.

### Current filtering implementation and issues

#### Implementation
Upon clicking any of the filters, a value with filter type is passed to **filterType** state. TaskList then conditionally re-renders the list, based on the filter type.

### Issues
Though it might seem it works at first, it only sort of does. 

1. UI status values are overridden if filters are swithed (but kept correct in the state, so if you name tasks with status name, you might see the filtering keeps working).
2. Editing filtered results usually applies changes to items other than filtered

It all comes to the fact that there is an issue with indexing within the filtered array somewhere.
