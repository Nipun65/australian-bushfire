interface InforProps {
  data: any;
}
const Info: React.FC<InforProps> = ({ data }) => {
  return data.map((value: any) => {
    return (
      <p className="flex items-center gap-3" key={value.id}>
        <span className={`size-4 ${value.color}`} />
        <span>{value.info}</span>
      </p>
    );
  });
};
export default Info;
