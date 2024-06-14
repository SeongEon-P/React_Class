package com.mysite.springboard.controller;

import com.mysite.springboard.entity.Board;
import com.mysite.springboard.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class BoardController {
    @Autowired
    private BoardService boardService;

    // 새로운 게시글을 생성
    @PostMapping("/addboard")
    public Board addBoard(@RequestBody Board newBoard) {
        return boardService.addBoard(newBoard);
    }

    // 모든 게시글을 조회
    @GetMapping("/boards")
    public List<Board> getAllBoards() {
        return boardService.getAllBoards();
    }

    // bno를 기반으로 특정 게시글을 조회
    @GetMapping("/board/{bno}")
    public Board getBoardById(@PathVariable Long bno) {
        return boardService.getBoardById(bno).orElse(null);
    }

    // bno를 기반으로 특정 게시글의 조회수를 증가
    @GetMapping("/board/{bno}/incrementHit")
    public Board incrementHit(@PathVariable Long bno) {
        return boardService.incrementHit(bno);
    }

    // bno를 기반으로 특정 게시글을 수정
    @PutMapping("/board/{bno}")
    public void updateBoard(@RequestBody Board updateBoard, @PathVariable Long bno) {
        boardService.updateBoard(bno, updateBoard);
    }

    // bno를 기반으로 특정 게시글을 삭제
    @DeleteMapping("/board/{bno}")
    public String deleteBoard(@PathVariable Long bno) {
        return boardService.deleteBoard(bno);
    }
}
