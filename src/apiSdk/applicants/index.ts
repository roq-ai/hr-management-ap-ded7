import axios from 'axios';
import queryString from 'query-string';
import { ApplicantInterface, ApplicantGetQueryInterface } from 'interfaces/applicant';
import { GetQueryInterface } from '../../interfaces';

export const getApplicants = async (query?: ApplicantGetQueryInterface) => {
  const response = await axios.get(`/api/applicants${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createApplicant = async (applicant: ApplicantInterface) => {
  const response = await axios.post('/api/applicants', applicant);
  return response.data;
};

export const updateApplicantById = async (id: string, applicant: ApplicantInterface) => {
  const response = await axios.put(`/api/applicants/${id}`, applicant);
  return response.data;
};

export const getApplicantById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/applicants/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteApplicantById = async (id: string) => {
  const response = await axios.delete(`/api/applicants/${id}`);
  return response.data;
};
