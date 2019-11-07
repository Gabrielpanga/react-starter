import React from 'react';
import styles from './Property.module.scss';
import { PropertyModel } from 'models/property-model';

type PropertyProps = { property: PropertyModel };

const Property = (props: PropertyProps) => (
  <div key={`property-${props.property.id}`} className={styles.container}>
    <span> {props.property.name} </span>
  </div>
);

export default Property;
