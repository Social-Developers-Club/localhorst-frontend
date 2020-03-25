
import { Category } from './enums/category';
import { Industry } from './enums/industry';
import { Type } from './enums/type';

export interface SelectOption{
  id: string,
  name: Type | Category | Industry | string 
}