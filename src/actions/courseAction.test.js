import expect from 'expect';
import * as courseActions from './courseAction';
import * as types from './actionTypes';

describe('Course Actions', ()=> {
  describe('createCourseSucesss', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      const action = courseActions.createCourseSuccess(course);

      expect(action).toEqual(expectedAction);
    });
  });
});