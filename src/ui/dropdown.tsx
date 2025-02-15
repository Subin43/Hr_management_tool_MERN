interface DropDownProps {
  mainOption : string;
  options    : {value : string; label : string}[];
  onChange  ?: (value:string) => void ;
}



const DropDown:React.FC<DropDownProps> = ({mainOption,options,onChange}) => {
  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange){
    onChange(e.target.value)
    }
  }
  return (
<select onChange={handleChange}>
      <option value="">{mainOption}</option> {/* Placeholder option */}
      {options.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default DropDown