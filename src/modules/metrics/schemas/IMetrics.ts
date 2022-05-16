import { ObjectId } from 'mongodb';

interface IMetrics {
  id: ObjectId;
  name: string;
  value: string;
  date: string;
}

export { IMetrics };
