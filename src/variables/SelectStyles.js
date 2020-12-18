export const SelectStyles = {
    control: (base, state) => ({
      ...base,
      cursor:'pointer',
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "yellow" : "green",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "red" : "blue"
      }
    }),
    menu: base => ({
      ...base,
      borderRadius: 0,
      backgroundColor:'#1D2123',
      color:'white',
      boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.5)',
      marginTop: 0,
      fontSize:'.75rem',
    }),
    menuList: base => ({
      ...base,
      // kill the white space on first and last option
      padding: 0
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = 'red';
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.color
          : isFocused
          ? '#FFFFFF20'
          : null,
        
        cursor: isDisabled ? 'not-allowed' : 'default',
  
        // ':active': {
        //   ...styles[':active'],
        //   backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
        // },
      };
    },
};