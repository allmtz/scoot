export const Container = ({ ...props }) => {
  return (
    <div className="font-space-mono max-w-[2560px] mx-auto">
      {props.children}
    </div>
  );
};
