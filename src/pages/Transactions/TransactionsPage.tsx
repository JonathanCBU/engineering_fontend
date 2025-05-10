import {
  Stack,
  Button,
  Group,
  TextInput,
  NumberInput,
  Select,
  ActionIcon,
} from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { useReducer } from 'react';
import TransactionRow from '@/components/Transactions/TransactionRow';
import { DateInput } from '@mantine/dates';

type categories =
  | 'Misc'
  | 'Subscription'
  | 'Date'
  | 'Paycheck'
  | 'Debt'
  | 'Rent'
  | 'Groceries'
  | 'Home';

const categoriesItems = [
  'Misc',
  'Subscription',
  'Date',
  'Paycheck',
  'Debt',
  'Rent',
  'Groceries',
  'Home',
];

interface TransactionRow {
  id: number;
  date?: Date;
  amount: number;
  name?: string;
  description?: string;
  category?: categories;
}

interface TransactionsState {
  rows: TransactionRow[];
  rowCount: number;
  updating: Boolean;
}

const defaultState: TransactionsState = {
  rows: [],
  rowCount: 0,
  updating: false,
};

type SetFieldAction =
  | {
      type: 'SET_FIELD';
      payload: { id: number; field: 'date'; value: Date | undefined };
    }
  | {
      type: 'SET_FIELD';
      payload: { id: number; field: 'amount'; value: number };
    }
  | {
      type: 'SET_FIELD';
      payload: {
        id: number;
        field: 'name' | 'description' | 'category';
        value: string | undefined;
      };
    };

type TransactionsAction =
  | { type: 'ADD_ROW' }
  | { type: 'REMOVE_ROW'; payload: number }
  | { type: 'UPDATE_START' }
  | { type: 'UPDATE_SUCCESS' }
  | SetFieldAction
  | { type: 'RESET' };

const reducer = (state: TransactionsState, action: TransactionsAction) => {
  switch (action.type) {
    case 'ADD_ROW':
      const newRow: TransactionRow = {
        id: state.rowCount + 1,
        date: undefined,
        amount: 0.0,
        name: '',
        description: '',
        category: 'Misc',
      };
      return {
        ...state,
        rows: [...state.rows, newRow],
        rowCount: state.rowCount + 1,
      };
    case 'REMOVE_ROW':
      const filteredRows = state.rows.filter(
        (row) => row.id !== action.payload
      );
      return {
        ...state,
        rows: [...filteredRows],
        rowCount: state.rowCount - 1,
      };
    case 'UPDATE_START':
      return {
        ...state,
        updating: true,
      };
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        updating: false,
      };
    case 'SET_FIELD':
      const { id, field, value } = action.payload;
      return {
        ...state,
        rows: state.rows.map((row) =>
          row.id === id ? { ...row, [field]: value } : row
        ),
      };
    case 'RESET':
      return {
        rows: [],
        rowCount: 0,
        updating: false,
      };
    default:
      return state;
  }
};

// TODO: validate transactions input
const validateTransaction = (transaction: TransactionRow): boolean => {
  return false;
};

const TransactionsPage = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const onSubmit = () => {
    dispatch({ type: 'UPDATE_START' });
    console.log(state.rows);
    dispatch({ type: 'UPDATE_START' });
  };

  const pingThing = async () => {
    const req = new Request('http://127.0.0.1:5000/ping');

    const resp = await fetch(req, {
      method: 'GET',
    });

    console.log(resp);
  };

  return (
    <Stack>
      <Group>
        <Button onClick={() => dispatch({ type: 'ADD_ROW' })}>Add Row</Button>
        <Button onClick={onSubmit}>Submit</Button>
        <Button onClick={pingThing}>Ping</Button>
      </Group>
      {state.rows.map((row) => {
        return (
          <Group key={row.id} align='center'>
            <DateInput
              placeholder='Date'
              value={row.date}
              onChange={(value) => {
                const date = new Date(value);
                dispatch({
                  type: 'SET_FIELD',
                  payload: {
                    id: row.id,
                    field: 'date',
                    value: date,
                  },
                });
              }}
            />
            <NumberInput
              placeholder='Amount'
              value={row.amount}
              onChange={(value) => {
                let num: number;
                if (typeof value === 'string') {
                  num = parseFloat(value);
                } else {
                  num = value;
                }
                dispatch({
                  type: 'SET_FIELD',
                  payload: {
                    id: row.id,
                    field: 'amount',
                    value: num,
                  },
                });
              }}
            />
            <TextInput
              placeholder='Name'
              value={row.name}
              onChange={(event) => {
                dispatch({
                  type: 'SET_FIELD',
                  payload: {
                    id: row.id,
                    field: 'name',
                    value: event.currentTarget.value,
                  },
                });
              }}
            />
            <TextInput
              placeholder='Description'
              value={row.description}
              onChange={(event) => {
                dispatch({
                  type: 'SET_FIELD',
                  payload: {
                    id: row.id,
                    field: 'description',
                    value: event.currentTarget.value,
                  },
                });
              }}
            />
            <Select
              placeholder='Category'
              value={row.category}
              data={categoriesItems}
              searchable
              onChange={(value) => {
                dispatch({
                  type: 'SET_FIELD',
                  payload: {
                    id: row.id,
                    field: 'category',
                    value: value || undefined,
                  },
                });
              }}
            />
            <ActionIcon
              onClick={() => dispatch({ type: 'REMOVE_ROW', payload: row.id })}
            >
              <IconTrash />
            </ActionIcon>
          </Group>
        );
      })}
    </Stack>
  );
};

export default TransactionsPage;
