export interface FormField {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  validations?: {
    isRequired?: boolean;
    pattern?: string;
  };
  options?: { label: string; value: string; checked: boolean }[];
}
