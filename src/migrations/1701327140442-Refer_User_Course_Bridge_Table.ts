import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class ReferUserCourseBridgeTable1701327140442
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'users_courses',
      new TableForeignKey({
        columnNames: ['user_Id'],
        referencedTableName: 'Users',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'users_courses',
      new TableForeignKey({
        columnNames: ['course_Id'],
        referencedTableName: 'Courses',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(): Promise<void> {}
}
