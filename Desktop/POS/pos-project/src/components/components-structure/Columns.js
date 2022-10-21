export const USER_COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
  },

  {
    Header: "First Name",
    accessor: "first-name",
  },
  {
    Header: "Last Name",
    accessor: "last-name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Subscription date",
    accessor: "Subscription-date",
  },
  {
    Header: "Discount percentage",
    accessor: "discount-percentage",
  },
];

export const PRODUCT_COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Picture",
    accessor: "thumbnail",
    Cell: ({ value }) => <img src={value} />,
  },
  {
    Header: "Name",
    accessor: "title",
  },

  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Price",
    accessor: "price",
  },
];

export const CATEGORIES_COLUMNS = [
  {
    Header: "Category Name",
    accessor: "category",
  },
  {
    Header: "Picture",
    accessor: "image",
    Cell: ({ value }) => <img src={value} />,
  }
];
