
import { push } from 'connected-react-router'

export function fetch(params) {
  setTimeout(() => {
    window.store.dispatch(push('/'))
  }, 2000);
}