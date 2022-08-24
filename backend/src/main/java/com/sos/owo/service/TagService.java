package com.sos.owo.service;

import com.sos.owo.domain.Tag;
import com.sos.owo.domain.repository.TagRepository;
import com.sos.owo.dto.TagResponseDto;
import com.sos.owo.error.Exception.custom.SomethingNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TagService {

    private final TagRepository tagRepository;

    @Transactional
    public void registTag(int recordId, List<String> tagList){
        tagRepository.registTag(recordId,tagList);
    }

    @Transactional
    public TagResponseDto findTagOne(int tagId) throws SomethingNotFoundException {
        return tagRepository.findTagOne(tagId);
    }

    @Transactional
    public List<String> findTagNameList(int recordId)throws SomethingNotFoundException{
        return tagRepository.findTagNameList(recordId);
    }

    @Transactional
    public List<TagResponseDto> findTagList(int recordId) throws SomethingNotFoundException{
        return tagRepository.findTagList(recordId);
    }

}
