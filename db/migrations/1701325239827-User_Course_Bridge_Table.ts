import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UserCourseBridgeTable1701325239827 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_courses',
        columns: [
          {
            name: 'user_Id',
            type: 'integer',
            default: 0,
            isPrimary: true,
          },
          {
            name: 'course_Id',
            type: 'integer',
            default: 0,
            isPrimary: true,
          },
        ],
      }),
    );
  }

  public async down(): Promise<void> {}
}
