import { TextInput, NumberInput, Select, Group } from '@mantine/core';
import { DateInput } from '@mantine/dates';

const TransactionRow = () => {
  return (
    <Group>
      <DateInput label='Date' />
      <NumberInput label='Amount' />
      <TextInput label='Name' />
      <TextInput label='Description' />
      <Select label='Category' />
    </Group>
  );
};

export default TransactionRow