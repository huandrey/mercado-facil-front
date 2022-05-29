import { createSelector } from '@reduxjs/toolkit';

const invoiceSelector = createSelector(
  (state: any) => state.invoice,
  (invoice) => {
    const { closedInvoice, currentInvoice, pastInvoices, invoiceSms } = invoice;

    return {
      currentInvoice,
      invoiceSms,
      pastInvoices,
      closedInvoice,
    };
  },
);
export { invoiceSelector };
