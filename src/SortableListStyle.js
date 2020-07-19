export default {
  root: {
    '& ul': {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      //backgroundColor: "#333333",
    },
    '& li': {
      float: 'left',
      display: 'block',
      color: 'white',
      textAlign: 'center',
      padding: '16px',
      textDecoration: 'none',
      '& hover': {
        backgroundColor: "#111111",
      }
    },
  }
}
