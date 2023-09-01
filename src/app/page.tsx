import CheckList from "./components/CheckList";
import SelectedOptions from "./components/SelectedOptions";
import ItemViewer from "./components/ItemViewer";

export default function Home() {
  return (
    <div className="w-1/2 flex flex-col bg-white p-5 gap-5">
      <CheckList />
      <SelectedOptions />
      <ItemViewer />
    </div>
  );
}
