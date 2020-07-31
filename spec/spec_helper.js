import path from 'path'
import sassTrue from 'sass-true'

const Spec = (dirname, filename) => {
  const file = path.join(dirname, `${filename}.spec.scss`)
  sassTrue.runSass({ file }, { describe, it })
}

export default Spec
