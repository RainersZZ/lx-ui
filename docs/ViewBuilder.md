# ViewBuilder guide

LxViewBuilder is a declarative component for building views using JSON Schema.

It work on the same principles as [LxFormBuilder](./FormBuilder.md), so this guide will only describe the additional features.

ViewBuilder can render the same components as FormBuilder plus LxForm and LxFilterBuilder. Components can be rendered directly inside view, inside stack, inside LxForm.
These additional components can be rendered using different `lx.displayType` values:
- `form` - renders LxForm
- `section` - when used inside LxForm, renders LxSection
- `filters` - renders LxFilter as LxFilterBuilder

## Examples

### Form example
```js
const schema = {
  type: 'object',
  properties: {
    form: {
      type: 'object',
      title: 'Form header',
      lx: {
        displayType: 'form',
        columnCount: 2,
        actionDefinitions: [
          { id: 'save', name: 'Save', kind: 'primary', icon: 'save' },
          { id: 'cancel', name: 'Cancel', kind: 'secondary', icon: 'cancel' },
        ],
        showHeader: true,
        stickyHeader: true,
        showFooter: true,
        stickyFooter: true,
        showPreHeaderInfo: false,
        showPostHeaderInfo: false,
        index: [],
        indexType: 'default',
        requiredMode: 'none',
        kind: 'default',
        orientation: null,
        hasSkipLink: false,
      },
      properties: {
        firstName: {
          type: 'string',
          title: 'First name',
        },
        lastName: {
          type: 'string',
          title: 'Last name',
        },
        measurements: {
          type: 'object',
          title: 'Measurements',
          lx: {
            displayType: 'section',
            columnCount: 2,
          },
          properties: {
            wrapper: {
              type: 'object',
              title: 'Height',
              lx: {
                displayType: 'stack',
                orientation: 'horizontal',
                horizontalAlignment: 'stretch',
              },
              properties: {
                height: {
                  type: 'number',
                },
                unit: {
                  type: 'string',
                  enum: ['cm', 'm'],
                  lx: {
                    variant: 'dropdown',
                  },
                },
              },
            },
            weight: {
              type: 'number',
              title: 'Weight',
            },
          },
        },
      },
    },
  },
};
```

This example renders LxForm with 2 sections - the default one and "Measurements" section.
Default section contains two input fields for first name and last name.
The measurement section contains number input field and unit section dropdown for height input, and wight input number field.
The form also has 2 actions - save and cancel.

### Simple view without form 

```js
const schema = {
  type: 'object',
  properties: {
    stack: {
      type: 'object',
      lx: {
        displayType: 'stack',
        mode: 'grid',
        horizontalConfig: ['*', '*'],
        horizontalAlignment: 'stretch',
      },
      properties: {
        firstName: {
          type: 'string',
          examples: 'First name',
        },
        lastName: {
          type: 'string',
          examples: 'Last name',
        },
        wrapper: {
          type: 'object',
          lx: {
            displayType: 'stack',
            orientation: 'horizontal',
          },
          properties: {
            height: {
              type: 'number',
              examples: 'Height',
            },
            unit: {
              type: 'string',
              enum: ['cm', 'm'],
              default: 'cm',
              lx: {
                variant: 'dropdown',
              },
            },
          },
        },
      },
    },
  },
};
```

This example renders defined components directly inside view.
A single LxStack wraps all elements to create the basic layout. Inside this stack, there are input fields for First Name and Last Name, along with a nested stack. The inner LxStack contains the Height input field and a Unit dropdown field.

### Filter example

```js
const schema = {
  type: 'object',
  properties: {
    filters: {
      type: 'object',
      lx: {
        displayType: 'filters',
        columnCount: 3,
        disabled: false,
        fastFilters: [],
        badge: '',
        badgeIcon: null,
        badgeType: 'default',
        texts: {
          filters: 'Filters',
          search: 'Filter',
          clear: 'Clear',
        },
      },
      properties: {
        title: {
          type: 'string',
          title: 'Title',
        },
        date: {
          type: 'string',
          format: 'date',
          title: 'Date from',
        },
        state: {
          type: 'array',
          title: 'State',
          enum: ['draft', 'published', 'deleted'],
          lx: {
            variant: 'tags',
          },
        },
      },
    },
  },
};
```

This example renders LxFilers component with 3 input fields - "Title", "Date from", "State".
- Title – A basic text input field, implemented using the LxTextInput component.
- Date From – A date input field, implemented using the LxDateTimePicker component.
- State – A tags input field, implemented using the LxValuePicker component, which allows users to select multiple values from a predefined set of items.
