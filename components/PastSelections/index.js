import styles from './styles.module.css'
import { string } from 'prop-types'

const PastSelections = ({ pastSelections }) => (
  <pre className={styles.past}>
    {!!pastSelections &&
      !!pastSelections.length &&
      pastSelections.map((p, i) => <span key={i}>{p}</span>)}
  </pre>
)

PastSelections.propTypes = {
  pastSelections: string,
}

PastSelections.defaultProps = {
  pastSelections: null,
}

export default PastSelections
