interface ButtonProps {
  text?: String;
}
export function Button(props: ButtonProps) {
  return (
    <button className="bg-blue-200 text-blue-700">
      {props.text || "Enviar"}
    </button>
  );
}
