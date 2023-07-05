import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Board]),
  ],
  controllers: [BoardController],
  providers: [BoardService, {provide: 'BOARD_REPOSITORY', useClass: BoardRepository}],
})
export class BoardModule {}
