import { LoaderProps } from "../@types/component";

export default function Loader({ isVisible = false }: LoaderProps) {
  return isVisible ? (
    <div className="loaderParent">
      <div className="loader"></div>
    </div>
  ) : null;
}
