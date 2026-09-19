export interface SocialItem {
  id: string;
  name: string;
  label: string;
  url: string;
  icon: string;
  badge?: string;
  colorScheme: 'blue' | 'red' | 'dual';
  description?: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type?: 'success' | 'info' | 'error';
}
