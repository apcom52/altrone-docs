import s from './Property.module.css';

export const PropertyRow = () => {
  return <div className={`${s.Property} ${s.Property_header}`}>
    <div>Name and type</div>
    <div>Default value</div>
    <div>Description</div>
  </div>
}