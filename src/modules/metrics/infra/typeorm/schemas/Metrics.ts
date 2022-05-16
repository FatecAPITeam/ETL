import { ObjectId } from 'mongodb';
import {
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';

// import { ITeste } from '../../../schemas';
import { IMetrics } from '@modules/metrics/schemas';

@Entity('metrics')
class Metrics implements IMetrics {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  value: string;

  @Column()
  date: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Metrics };
