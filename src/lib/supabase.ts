import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ugcrcobmniwxurvmqrml.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnY3Jjb2Jtbml3eHVydm1xcm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3MTY1MTAsImV4cCI6MjA2NDI5MjUxMH0.8jYWOgTWEq4000fWcTJSpWT36q2jrOOQwnCdgrzGXUE'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
