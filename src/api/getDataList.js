import http, { get, patch } from '../utils/http';

export const getDataList = options => http("get", "list/getData", options);

export const editDataListEntry = data => patch('list/editData', data);

export const deleteDataListEntryById = id => get('list/deleteData', id);

export const getDataListExpandInfoById = id => get('list/getExpand', id);