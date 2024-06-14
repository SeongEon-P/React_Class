package com.mysite.springboard.service;

import com.mysite.springboard.entity.Board;
import com.mysite.springboard.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BoardService {
    @Autowired
    private BoardRepository boardRepository;

    public Board addBoard(Board board) {
        return boardRepository.save(board);
    }

    public List<Board> getAllBoards() {

        return boardRepository.findAll();
    }

    public Optional<Board> getBoardById(Long bno) {
        incrementHit(bno);  // 조회수 증가 후 게시글 반환
        return boardRepository.findById(bno);
    }

    public Board updateBoard(Long bno, Board updatedBoard) {
        return boardRepository.findById(bno)
                .map(board -> {
                    board.setTitle(updatedBoard.getTitle());
                    board.setContent(updatedBoard.getContent());
                    board.setAuthor(updatedBoard.getAuthor());
                    board.setHit(updatedBoard.getHit());
                    return boardRepository.save(board);
                }).orElse(null);
    }

    public String deleteBoard(Long bno) {
        if (!boardRepository.existsById(bno)) {
            return "게시글 BNO: " + bno + "를 찾을 수 없습니다.";
        }
        boardRepository.deleteById(bno);
        return "게시글 BNO: " + bno + "는 삭제되었습니다.";
    }

    // 게시글 조회수 증가 로직
    public Board incrementHit(Long bno) {
        return boardRepository.findById(bno)
                .map(board -> {
                    board.setHit(board.getHit() + 1);
                    return boardRepository.save(board);
                }).orElse(null);
    }
}
