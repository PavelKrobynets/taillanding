type TProps = {
  title: string;
};

export default function Title(props: TProps) {
  return (
    <div className="flex flex-row items-center gap-4">
      <h3 className="text-zinc-400 font-medium text-3xl">{props.title}</h3>
      <div className="w-16 h-[1px] bg-gray-500"></div>
    </div>
  );
}
