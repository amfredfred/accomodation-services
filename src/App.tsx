import { useAssets } from './Hooks/useAssets';
import Root from './Root';

export default function App() {
  useAssets()
  return <Root />
}
