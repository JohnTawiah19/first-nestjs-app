/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param, ParseUUIDPipe, Put } from '@nestjs/common'
import { FindStudentResponseDto, StudentResponseDto } from 'src/student/dto/student.dto'
import { StudentService } from 'src/student/student.service'

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getStudents(@Param('teacherId', new ParseUUIDPipe()) teacherId: string): FindStudentResponseDto[] {
    return this.studentService.getStudentsbyTeacherId(teacherId)
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): StudentResponseDto {
    return this.studentService.updateStudentTeacher(teacherId, studentId)
  }
}
